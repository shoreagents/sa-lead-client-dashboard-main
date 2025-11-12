'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Phone,
  BarChart,
  HelpCircle,
  FileText,
  ClipboardList,
  FileCheck,
  Lightbulb,
  MessageCircle,
  Home,
  Building2,
  Heart,
  Search,
  Shield
} from 'lucide-react';
import Image from 'next/image';

export default function InsuranceVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Insurance Virtual Assistant: Transform Your Insurance Operations
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Scale your insurance company with specialized virtual assistants trained for claims processing, policy administration, and customer service excellence
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
              alt="Professional insurance virtual assistant providing customer service with insurance claims processing dashboard"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">73%</div>
              <div className="text-gray-600 font-medium">Cost Reduction</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Productivity Boost</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The insurance industry faces unprecedented challenges with increasing operational demands, regulatory complexity, and customer service expectations. Insurance virtual assistants provide a strategic solution that enables insurance companies to scale operations efficiently while reducing costs by 60-75% compared to traditional hiring.
          </p>
          <p className="text-gray-700 leading-relaxed">
            ShoreAgents specializes in delivering dedicated insurance virtual assistants who possess deep understanding of insurance processes, regulatory requirements, and industry-specific software platforms. Our insurance VAs seamlessly integrate into your existing workflows, providing immediate operational improvements and enhanced customer service capabilities through our comprehensive virtual assistants platform.
          </p>
        </div>

        {/* What is an Insurance VA */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-lime-600 mr-3" />
            What is an Insurance Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An insurance virtual assistant is a skilled remote professional who specializes in supporting insurance companies with administrative, operational, and customer-facing tasks. Unlike general virtual assistants, insurance VAs possess comprehensive knowledge of insurance terminology, processes, compliance requirements, and industry-specific software platforms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These specialized professionals handle a wide range of insurance-specific functions including claims processing, policy administration, underwriting support, customer service, data management, and regulatory compliance documentation. They work remotely but function as integral team members, allowing your licensed professionals to focus on high-value activities like complex underwriting, sales, and strategic decision-making.
          </p>
        </div>

        {/* Core Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Insurance Virtual Assistant Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <FileCheck className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Claims Processing Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Handle initial claim intake, document collection, damage assessment coordination, and status updates. Process routine claims efficiently while escalating complex cases to licensed adjusters for expert review.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <ClipboardList className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Administration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Manage policy issuance, endorsements, renewals, and modifications. Ensure accurate data entry and maintain comprehensive policy documentation across all insurance lines of business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <MessageCircle className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service & Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Provide first-line customer support, answer policy questions, process routine changes, and schedule appointments with licensed professionals for complex insurance inquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Underwriting Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Assist with risk assessment data collection, application processing, document verification, and preparation of comprehensive underwriting files for licensed professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Insurance Companies Choose VAs */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Insurance Companies Choose Virtual Assistants
          </h2>
          <p className="text-gray-700 text-center leading-relaxed mb-8 max-w-4xl mx-auto">
            Insurance companies face unique operational challenges that make virtual assistants particularly valuable. The industry requires managing high volumes of routine tasks while maintaining strict compliance standards and delivering exceptional customer service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dramatic Cost Reduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insurance virtual assistants typically cost 60-75% less than hiring equivalent full-time employees locally. This significant cost reduction comes without sacrificing quality, as our VAs receive comprehensive training in insurance processes and maintain the same productivity standards as onsite staff.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalability and Operational Flexibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insurance business volume fluctuates significantly based on market conditions, seasonality, and business growth patterns. Virtual assistants provide the operational flexibility to scale your support team up or down based on current needs without the long-term commitments and overhead costs associated with traditional hiring processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Customer Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  With virtual assistants handling routine inquiries and administrative tasks, your licensed professionals can dedicate more time to complex customer needs, policy consultation, and relationship building. This improved service quality leads to higher customer satisfaction scores and improved retention rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Insurance Efficiency Revolution
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Having worked with hundreds of insurance companies over the years, I've witnessed firsthand how virtual assistants transform operations. The most successful insurance companies aren't just using VAs to cut costs—they're using them strategically to handle routine tasks so their licensed professionals can focus on complex underwriting, relationship building, and business development.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold italic">
              The key is treating your virtual assistant as a core team member, not just an outsourced service. When you invest in proper training and integration, these professionals become invaluable extensions of your team who understand your processes, your clients, and your business objectives completely.
            </p>
          </div>
        </div>

        {/* Operations Improvement */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            Insurance Operations Improvement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Claims Processing Speed</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-lime-600 mb-2">73%</div>
                  <p className="text-gray-600 text-sm">Faster claims processing with VA support</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Response Time</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-lime-600 mb-2">85%</div>
                  <p className="text-gray-600 text-sm">Improvement in response times</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Administrative Efficiency</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-lime-600 mb-2">92%</div>
                  <p className="text-gray-600 text-sm">Increase in administrative efficiency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Insurance Industry Applications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Insurance Industry Applications
          </h2>
          <p className="text-gray-700 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
            Different types of insurance companies benefit from virtual assistants in unique ways, depending on their specific operational requirements and customer base characteristics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Property & Casualty Insurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  P&C insurers benefit significantly from virtual assistants who handle high-volume claims processing, policy modifications, and customer inquiries. VAs excel at gathering initial claim information, coordinating with adjusters, and maintaining communication with policyholders throughout the entire claims process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Life & Health Insurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Life and health insurance companies utilize virtual assistants for application processing, beneficiary inquiries, premium payment processing, and policy administration. These VAs handle sensitive communications with appropriate training while maintaining the empathy and professionalism required for life insurance interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Insurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Commercial insurance operations benefit from virtual assistants who manage complex policy documentation, certificate requests, renewal processing, and client communication. VAs help commercial insurers maintain the detailed documentation and responsive service that business clients demand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Property Management Insurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  For insurance companies serving property management clients, virtual assistants handle landlord insurance inquiries, tenant-related claims, property inspection coordination, and liability coverage questions. They understand the unique needs of property management companies and provide specialized support for this sector.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              For specialized property management support, explore our comprehensive property management virtual assistant services tailored to this industry.
            </p>
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              Explore Property Management VAs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Ready to Transform CTA */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Insurance Operations?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover how ShoreAgents can provide dedicated insurance virtual assistants trained specifically for your industry needs and operational requirements.
          </p>
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Your Consultation Today
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can virtual assistants handle insurance claims processing effectively?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, virtual assistants excel at many aspects of claims processing including initial claim intake, document collection, data entry, status updates, and routine processing tasks. They cannot make coverage decisions or handle tasks requiring insurance licenses, but they can significantly streamline the claims process under proper supervision and dramatically reduce processing times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the typical cost savings with insurance virtual assistants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Insurance companies typically save 60-75% on operational costs compared to hiring equivalent local staff. Additional savings come from increased efficiency, reduced errors, improved customer service, and the ability to scale operations without proportional cost increases or long-term employment commitments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can insurance virtual assistants be implemented?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 2-4 weeks depending on the complexity of your systems, processes, and specific requirements. This includes virtual assistant selection, comprehensive training on your specific procedures, and seamless integration with your existing workflows and team structure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What insurance software platforms do virtual assistants work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Insurance virtual assistants are proficient in major insurance platforms including Applied Epic, AMS360, Vertafore products, Duck Creek, Guidewire, and other industry-specific management systems. They can quickly learn your specific software and workflows through our comprehensive training process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure data security and compliance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We implement strict security protocols including secure VPN connections, multi-factor authentication, encrypted data transfer, and comprehensive confidentiality agreements. Our virtual assistants are trained in HIPAA compliance (for health insurance), data privacy regulations, and industry-specific compliance requirements to ensure your data remains secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can virtual assistants provide customer service for insurance clients?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely! Insurance virtual assistants are trained to provide excellent customer service including answering policy questions, processing routine changes, providing claim status updates, and scheduling appointments with licensed professionals for complex inquiries. They maintain the professional communication standards your clients expect.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Transform Your Insurance Operations Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to reduce costs, improve efficiency, and enhance customer service with dedicated insurance virtual assistants?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Get Started with ShoreAgents
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Pricing & Services
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm opacity-75">
            For comprehensive virtual assistant solutions tailored to the insurance industry, explore our main virtual assistants services or contact our specialized team to discuss your specific insurance industry requirements.
          </p>
        </div>

      </div>
    </div>
  );
}
