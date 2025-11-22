'use client';

import { useState } from 'react';
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
} from '@/components/ui/dialog';
import { Mail, User, X, Sparkles } from 'lucide-react';
import { generateUserId } from '@/lib/userEngagementService';

interface Stage2CaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Stage2CaptureModal({ isOpen, onClose }: Stage2CaptureModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveData = async () => {
    try {
      const userId = generateUserId();

      const response = await fetch('/api/stage-2-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          user_id: userId
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save information');
      }

      const result = await response.json();
      console.log('Stage 2 data saved successfully:', result);
      return true;
    } catch (error) {
      console.error('Error saving Stage 2:', error);
      alert(error instanceof Error ? error.message : 'Failed to save. Please try again.');
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const saved = await saveData();
    
    if (saved) {
      // Close this modal
      onClose();
      setFormData({ firstName: '', lastName: '', email: '' });
      
      // Small delay, then trigger pricing calculator
      setTimeout(() => {
        // Dispatch custom event to open pricing calculator
        const event = new CustomEvent('openPricingCalculator');
        window.dispatchEvent(event);
      }, 300);
    }
    
    setIsSubmitting(false);
  };

  const handleMaybeLater = async () => {
    // Only save if they've filled in the form
    if (formData.firstName && formData.lastName && formData.email) {
      setIsSubmitting(true);
      const saved = await saveData();
      setIsSubmitting(false);
      
      if (saved) {
        // Show a friendly message
        alert('Thanks! We\'ve saved your information and will be in touch soon. 😊');
      }
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[450px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-50"
        >
          <X className="w-5 h-5" />
        </button>
        
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lime-600" />
            <DialogTitle className="text-xl font-semibold text-gray-900">
              One more quick step!
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600 mt-2">
            We want to get to know you so we can personalize your experience and connect you with the perfect talent for your team.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gray-500" />
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1.5"
                placeholder="John"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gray-500" />
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1.5"
                placeholder="Smith"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gray-500" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1.5"
              placeholder="john.smith@company.com"
            />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleMaybeLater}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Saving...' : 'Maybe Later'}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Get My Quote
                </div>
              )}
            </Button>
          </DialogFooter>
        </form>

        {/* Trust indicator */}
        <p className="text-xs text-center text-gray-500 mt-4">
          🔒 Your information is secure and will never be shared
        </p>
      </DialogContent>
    </Dialog>
  );
}

