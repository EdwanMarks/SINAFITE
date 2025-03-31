import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z.string().min(3, { message: 'Assunto deve ter pelo menos 3 caracteres' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
  consent: z.boolean().refine(val => val === true, { message: 'Você deve concordar com a política de privacidade' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: Omit<ContactFormValues, 'consent'>) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Mensagem enviada',
        description: 'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.',
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const { consent, ...contactData } = data;
    contactMutation.mutate(contactData);
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="font-montserrat font-bold text-3xl text-neutral-800 mb-4">Entre em Contato</h2>
            <p className="text-neutral-600 mb-6">
              Estamos à disposição para atender nossos filiados e responder a quaisquer dúvidas. Utilize um dos canais abaixo para entrar em contato conosco.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 bg-blue-100 text-[#1A3A6E] rounded-full p-3 mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-neutral-800 mb-1">Endereço</h3>
                  <p className="text-neutral-600">SBS Quadra 2, Bloco E, Edifício Prime, Sala 206<br />
                  Brasília - DF, CEP: 70070-120</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 bg-blue-100 text-[#1A3A6E] rounded-full p-3 mr-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-neutral-800 mb-1">Telefone</h3>
                  <p className="text-neutral-600">(61) 3032-8142</p>
                  <p className="text-neutral-600">(61) 98145-6750 (WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 bg-blue-100 text-[#1A3A6E] rounded-full p-3 mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-neutral-800 mb-1">Email</h3>
                  <p className="text-neutral-600">contato@sinafite-df.org.br</p>
                  <p className="text-neutral-600">juridico@sinafite-df.org.br</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 bg-blue-100 text-[#1A3A6E] rounded-full p-3 mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-neutral-800 mb-1">Horário de Atendimento</h3>
                  <p className="text-neutral-600">Segunda a Sexta: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl text-neutral-800 mb-4">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-neutral-700 mb-1">Nome</Label>
                    <Input 
                      id="name"
                      {...register('name')}
                      className={`w-full px-3 py-2 ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-neutral-700 mb-1">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-3 py-2 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-neutral-700 mb-1">Assunto</Label>
                  <Input 
                    id="subject"
                    {...register('subject')}
                    className={`w-full px-3 py-2 ${errors.subject ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-neutral-700 mb-1">Mensagem</Label>
                  <Textarea 
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full px-3 py-2 ${errors.message ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                
                <div className="flex items-center">
                  <Checkbox 
                    id="consent"
                    {...register('consent')}
                  />
                  <Label htmlFor="consent" className="ml-2 text-sm text-neutral-700">
                    Concordo com a política de privacidade e tratamento de dados.
                  </Label>
                </div>
                {errors.consent && <p className="text-red-500 text-xs">{errors.consent.message}</p>}
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1A3A6E] hover:bg-blue-900 text-white py-2 px-4 h-auto"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
