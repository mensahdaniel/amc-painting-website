'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  serviceInterest: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  handleInputChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your full name');
      return false;
    }

    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return false;
    }

    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters long');
      return false;
    }

    if (formData.message.length > 2000) {
      toast.error('Message must be less than 2000 characters long');
      return false;
    }

    if (formData.subject.length > 100) {
      toast.error('Subject must be less than 100 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (!response.ok) {
        // Handle specific error codes
        if (response.status === 400) {
          throw new Error(result.error || 'Please check your input and try again.');
        } else if (response.status === 500) {
          throw new Error(result.error || 'Server error. Please try again later or contact us directly.');
        } else {
          throw new Error(result.error || 'Something went wrong. Please try again.');
        }
      }

      // Success message with more details
      if (result.autoReplyStatus === 'failed') {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours. (Note: Auto-reply email may have failed, but your message was received)');
      } else {
        toast.success('Message sent successfully! Check your email for confirmation. We\'ll get back to you within 24 hours.');
      }
      
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          toast.error('Request timed out. Please check your internet connection and try again.');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.error('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      serviceInterest: '',
      subject: '',
      message: '',
    });
  };

  return {
    formData,
    isLoading,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};