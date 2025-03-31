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
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { insertSubscriberSchema } from '@shared/schema';

const formSchema = insertSubscriberSchema.extend({
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar a política de privacidade.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Newsletter: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      privacyPolicy: false,
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const { privacyPolicy, ...subscriber } = data;
      return apiRequest('POST', '/api/subscribers', subscriber);
    },
    onSuccess: () => {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas atualizações por e-mail.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro na inscrição",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao processar sua inscrição.",
      });
    }
  });
  
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Fique por dentro das novidades</h2>
            <p className="text-neutral-100">
              Cadastre-se para receber atualizações sobre notícias, eventos e informações importantes para os auditores fiscais do DF.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu e-mail" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Nome</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
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
                    <FormItem className="flex items-start">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        />
                      </FormControl>
                      <FormLabel className="ml-2 block text-sm text-neutral-100">
                        Concordo em receber comunicações e estou ciente da <a href="/privacy" className="text-white underline">política de privacidade</a>.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-primary hover:bg-neutral-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Processando..." : "Inscrever-se"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
