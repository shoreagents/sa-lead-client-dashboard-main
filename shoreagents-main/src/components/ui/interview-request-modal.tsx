'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog-videocall';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Calendar, User, CheckCircle } from 'lucide-react';
import { LoginModal } from '@/components/ui/login-modal';
import { useAuth } from '@/lib/auth-context';

interface InterviewRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
  candidatePosition: string;
  candidateId?: string;
  candidateAvatar?: string;
  onSubmit: (data: InterviewRequestData) => Promise<void>;
}

export interface InterviewRequestData {
  firstName: string;
  lastName: string;
  email: string;
}

export function InterviewRequestModal({
  isOpen,
  onClose,
  candidateName,
  candidatePosition,
  candidateId,
  candidateAvatar,
  onSubmit
}: InterviewRequestModalProps) {
  const { appUser, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState<InterviewRequestData>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Show confirmation dialog when user is logged in and modal opens
  useEffect(() => {
    if (isAuthenticated && appUser && isOpen) {
      setShowConfirmDialog(true);
    } else if (!isAuthenticated && isOpen) {
      // Reset form for non-authenticated users
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
    }
  }, [isAuthenticated, appUser, isOpen]);

  // Handle confirmation dialog responses
  const handleConfirmDetails = () => {
    if (appUser) {
      setFormData({
        firstName: appUser.first_name || '',
        lastName: appUser.last_name || '',
        email: appUser.email || ''
      });
    }
    setShowConfirmDialog(false);
  };

  const handleEditDetails = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
    setShowConfirmDialog(false);
  };

  const handleInputChange = (field: keyof InterviewRequestData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔍 Form submitted!', { formData, isAuthenticated });
    setError('');

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields (First Name, Last Name, Email)');
      return;
    }

    if (isAuthenticated) {
      // User is logged in, pass data to parent component
      setLoading(true);
      try {
        console.log('🔍 Calling onSubmit with:', formData);
        await onSubmit(formData);
        setIsSuccess(true);
        
        // Wait a moment to show success message, then close
        setTimeout(() => {
          onClose();
        }, 2000);

      } catch (error) {
        console.error('❌ Interview request error:', error);
        setError(error instanceof Error ? error.message : 'Failed to submit interview request. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // User is not logged in, close the interview modal and open the login modal with pre-filled data
      console.log('🔍 User not authenticated, opening login modal');
      onClose();
      setShowLoginModal(true);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
      setError('');
      setIsSuccess(false);
      setShowConfirmDialog(false);
      onClose();
    }
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
    // Reset form when login modal is closed
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] z-[10000]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-lime-600" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-gray-900">
                Request Interview
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Schedule an interview with {candidateName}
              </DialogDescription>
            </div>
          </div>
          
          {/* Candidate Information */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border">
            <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center overflow-hidden">
              {candidateAvatar ? (
                <img 
                  src={candidateAvatar} 
                  alt={candidateName}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-lime-600" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{candidateName}</h3>
              <p className="text-sm text-gray-600">{candidatePosition}</p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isSuccess && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Successfully requested an interview with {candidateName}! We'll be in touch soon.
              </AlertDescription>
            </Alert>
          )}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-lime-600" />
              Your Information
            </h3>
            
            {isAuthenticated && (
              <div className="mb-4 p-3 bg-lime-50 border border-lime-200 rounded-lg">
                <p className="text-sm text-lime-700">
                  ✓ Your information has been automatically filled from your account
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                  disabled={loading || isSuccess}
                  className={isAuthenticated ? 'bg-gray-50' : ''}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                  disabled={loading || isSuccess}
                  className={isAuthenticated ? 'bg-gray-50' : ''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                disabled={loading || isSuccess}
                className={isAuthenticated ? 'bg-gray-50' : ''}
              />
            </div>
          </div>


          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading || isSuccess}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || isSuccess}
              className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Request...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Request Submitted!
                </>
              ) : (
                <>
                  <Calendar className="mr-2 h-4 w-4" />
                  Request Interview
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      
      {/* Login Modal with pre-filled data */}
      {showLoginModal && (
        <LoginModal 
          onSuccess={handleLoginModalClose}
          prefillData={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
          }}
          context="default"
        >
          <div style={{ display: 'none' }} />
        </LoginModal>
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <Dialog open={showConfirmDialog} onOpenChange={() => setShowConfirmDialog(false)}>
          <DialogContent className="sm:max-w-[400px] z-[10001]">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-lime-600" />
                </div>
                <div>
                  <DialogTitle className="text-lg font-bold text-gray-900">
                    Confirm Your Details
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-600">
                    We found your account information. Is this correct?
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <div className="bg-lime-50 border border-lime-200 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Name:</span>
                    <span className="text-sm text-gray-900">
                      {appUser?.first_name} {appUser?.last_name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">Email:</span>
                    <span className="text-sm text-gray-900">{appUser?.email}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                We'll use this information to contact you about the interview with {candidateName}.
              </p>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleEditDetails}
                className="w-full sm:w-auto"
              >
                Edit Details
              </Button>
              <Button
                type="button"
                onClick={handleConfirmDetails}
                className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white"
              >
                Yes, Use These Details
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Dialog>
  );
}
