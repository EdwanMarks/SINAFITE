import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  TimeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/ui/icons';
import { insertContactMessageSchema } from '@shared/schema';

const formSchema = insertContactMessageSchema.extend({
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Você precisa concordar com a política de privacidade.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacyPolicy: false,
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const { privacyPolicy, ...message } = data;
      return apiRequest('POST', '/api/contact', message);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato o mais breve possível.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao enviar sua mensagem.",
      });
    }
  });
  
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-neutral-800">Entre em contato</h2>
          <p className="mt-2 text-lg text-neutral-600 max-w-2xl mx-auto">
            Estamos à disposição para ajudar e responder suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-neutral-50 border border-neutral-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPinIcon className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-neutral-800">Endereço</h4>
                      <p className="text-neutral-600">SBS Quadra 2, Bloco E, Ed. Prime, Salas 1401-1409, Brasília/DF, CEP 70070-120</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <PhoneIcon className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-neutral-800">Telefone</h4>
                      <p className="text-neutral-600">(61) 3321-8482</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MailIcon className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-neutral-800">E-mail</h4>
                      <p className="text-neutral-600">contato@sinafite-df.org.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <TimeIcon className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-neutral-800">Horário de Atendimento</h4>
                      <p className="text-neutral-600">Segunda a sexta, das 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-base font-semibold text-neutral-800 mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
                      <FacebookIcon className="text-xl" />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
                      <InstagramIcon className="text-xl" />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
                      <TwitterIcon className="text-xl" />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
                      <YoutubeIcon className="text-xl" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-neutral-700 mb-1">Nome</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 rounded-md bg-neutral-50 border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-neutral-700 mb-1">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 rounded-md bg-neutral-50 border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-neutral-700 mb-1">Assunto</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-3 rounded-md bg-neutral-50 border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-neutral-700 mb-1">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="w-full px-4 py-3 rounded-md bg-neutral-50 border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacyPolicy"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                      </FormControl>
                      <FormLabel className="ml-2 block text-sm text-neutral-600">
                        Concordo com a <a href="/privacy" className="text-primary hover:underline">política de privacidade</a> do Sinafite-DF.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-md font-medium transition-colors duration-200"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
