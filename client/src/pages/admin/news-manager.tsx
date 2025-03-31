import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/hooks';
import { formatDate } from '@/lib/hooks';
import { apiRequest } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Article, insertArticleSchema } from '@shared/schema';
import { Pencil, Trash2, Plus, Search, ArrowUpDown } from 'lucide-react';

const categories = ["Notícias", "Eventos", "Jurídico", "Institucional"];

const formSchema = insertArticleSchema.extend({
  id: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const NewsManager: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Article;
    direction: 'asc' | 'desc';
  }>({ key: 'publishedAt', direction: 'desc' });
  
  useEffect(() => {
    // Check if user is authenticated and is admin
    if (!isAuthenticated || user?.role !== 'admin') {
      setLocation('/admin');
    }
  }, [isAuthenticated, user, setLocation]);

  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const createForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      summary: '',
      image: '',
      category: 'Notícias',
      publishedAt: new Date().toISOString(),
      authorId: user?.id || 1,
    },
  });

  const editForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      summary: '',
      image: '',
      category: 'Notícias',
      publishedAt: new Date().toISOString(),
      authorId: user?.id || 1,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest('POST', '/api/articles', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/articles'] });
      toast({
        title: "Notícia criada com sucesso!",
        description: "A notícia foi adicionada ao site.",
      });
      setIsCreateDialogOpen(false);
      createForm.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro ao criar notícia",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação.",
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const { id, ...updateData } = data;
      return apiRequest('PUT', `/api/articles/${id}`, updateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/articles'] });
      toast({
        title: "Notícia atualizada com sucesso!",
        description: "As alterações foram salvas.",
      });
      setIsEditDialogOpen(false);
      editForm.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro ao atualizar notícia",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação.",
      });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest('DELETE', `/api/articles/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/articles'] });
      toast({
        title: "Notícia removida com sucesso!",
        description: "A notícia foi removida do site.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro ao remover notícia",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação.",
      });
    }
  });

  const onCreateSubmit = (data: FormValues) => {
    createMutation.mutate(data);
  };

  const onEditSubmit = (data: FormValues) => {
    updateMutation.mutate(data);
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    editForm.reset({
      id: article.id,
      title: article.title,
      content: article.content,
      summary: article.summary,
      image: article.image || '',
      category: article.category,
      publishedAt: article.publishedAt,
      authorId: article.authorId,
    });
    setIsEditDialogOpen(true);
  };

  const handleSort = (key: keyof Article) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredArticles = articles
    ? articles
        .filter(article =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          const key = sortConfig.key;
          
          if (key === 'publishedAt') {
            const dateA = new Date(a[key]).getTime();
            const dateB = new Date(b[key]).getTime();
            return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
          }
          
          if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return sortConfig.direction === 'asc'
              ? (a[key] as string).localeCompare(b[key] as string)
              : (b[key] as string).localeCompare(a[key] as string);
          }
          
          return 0;
        })
    : [];

  return (
    <>
      <Helmet>
        <title>Gerenciar Notícias | Sinafite-DF</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Admin header */}
        <header className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">Sinafite-DF</span>
                </div>
                <div className="hidden md:block ml-10">
                  <div className="flex items-center space-x-4">
                    <a href="/admin/dashboard" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                    <a href="/admin/news" className="bg-primary-dark px-3 py-2 rounded-md text-sm font-medium">Notícias</a>
                    <a href="/admin/services" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Serviços</a>
                    <a href="/admin/messages" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Mensagens</a>
                    <a href="/admin/pages" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Páginas</a>
                  </div>
                </div>
              </div>
              <div>
                <a href="/admin/dashboard" className="text-white hover:text-neutral-200">
                  Voltar para Dashboard
                </a>
              </div>
            </div>
          </div>
        </header>
        
        {/* Admin content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-neutral-800">Gerenciar Notícias</h1>
              
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Nova Notícia
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Criar Nova Notícia</DialogTitle>
                    <DialogDescription>
                      Preencha os campos abaixo para criar uma nova notícia
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Form {...createForm}>
                    <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4">
                      <FormField
                        control={createForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Digite o título da notícia" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={createForm.control}
                        name="summary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resumo</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Digite um breve resumo da notícia"
                                rows={2}
                              />
                            </FormControl>
                            <FormDescription>
                              Este resumo será exibido na listagem de notícias.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={createForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Conteúdo</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Digite o conteúdo completo da notícia"
                                rows={8}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={createForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Categoria</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione uma categoria" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={createForm.control}
                          name="image"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL da Imagem</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Ex: /images/news/example.jpg"
                                />
                              </FormControl>
                              <FormDescription>
                                Caminho para a imagem da notícia
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <DialogFooter>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsCreateDialogOpen(false)}
                        >
                          Cancelar
                        </Button>
                        <Button type="submit" disabled={createMutation.isPending}>
                          {createMutation.isPending ? "Salvando..." : "Salvar Notícia"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Notícias</CardTitle>
                <CardDescription>
                  Gerencie as notícias publicadas no site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
                    <Input
                      placeholder="Buscar notícias..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40px]">ID</TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort('title')}>
                            <div className="flex items-center">
                              Título
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </div>
                          </TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort('category')}>
                            <div className="flex items-center">
                              Categoria
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </div>
                          </TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort('publishedAt')}>
                            <div className="flex items-center">
                              Data
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </div>
                          </TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredArticles.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-neutral-500">
                              {searchTerm ? "Nenhuma notícia encontrada com os termos de busca." : "Nenhuma notícia cadastrada."}
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredArticles.map((article) => (
                            <TableRow key={article.id}>
                              <TableCell>{article.id}</TableCell>
                              <TableCell className="font-medium">{article.title}</TableCell>
                              <TableCell>{article.category}</TableCell>
                              <TableCell>{formatDate(article.publishedAt)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEdit(article)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-red-500 hover:text-red-700"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Tem certeza que deseja excluir a notícia "{article.title}"? Esta ação não pode ser desfeita.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction
                                          onClick={() => handleDelete(article.id)}
                                          className="bg-red-500 hover:bg-red-700"
                                        >
                                          Excluir
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Edit Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Editar Notícia</DialogTitle>
                  <DialogDescription>
                    Edite os campos da notícia selecionada
                  </DialogDescription>
                </DialogHeader>
                
                <Form {...editForm}>
                  <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-4">
                    <FormField
                      control={editForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Título</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Digite o título da notícia" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={editForm.control}
                      name="summary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resumo</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Digite um breve resumo da notícia"
                              rows={2}
                            />
                          </FormControl>
                          <FormDescription>
                            Este resumo será exibido na listagem de notícias.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={editForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Conteúdo</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Digite o conteúdo completo da notícia"
                              rows={8}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={editForm.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Categoria</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={editForm.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>URL da Imagem</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Ex: /images/news/example.jpg"
                              />
                            </FormControl>
                            <FormDescription>
                              Caminho para a imagem da notícia
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsEditDialogOpen(false)}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit" disabled={updateMutation.isPending}>
                        {updateMutation.isPending ? "Salvando..." : "Salvar Alterações"}
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </div>
    </>
  );
};

export default NewsManager;
