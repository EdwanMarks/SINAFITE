import React from 'react';
import { Link } from 'wouter';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileTextIcon, 
  CalendarIcon, 
  LawIcon, 
  QuestionAnswerIcon 
} from '@/components/ui/icons';

const Resources: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800">Recursos para Filiados</h2>
          <p className="mt-1 sm:mt-2 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Acesse documentos, materiais e serviços exclusivos para membros do sindicato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="bg-neutral-50 border border-neutral-200">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2 sm:mb-3 md:mb-4">Área do Filiado</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
                Acesse sua área restrita para consultar processos, documentos e serviços exclusivos para filiados do Sinafite-DF.
              </p>
              <Link href="/member-area">
                <Button className="bg-primary hover:bg-primary-dark text-white text-sm sm:text-base py-1.5 sm:py-2 h-auto">
                  Acessar área restrita
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-neutral-50 border border-neutral-200 hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <FileTextIcon className="text-primary text-lg sm:text-xl mr-1.5 sm:mr-2" />
                  <h4 className="text-base sm:text-lg font-bold text-neutral-800">Documentos</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
                  Formulários, modelos e documentos úteis para sua atividade profissional.
                </p>
                <Link href="/member-area/documents" className="text-primary text-xs sm:text-sm font-medium hover:text-primary-dark transition-colors duration-200">
                  Ver documentos
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border border-neutral-200 hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <CalendarIcon className="text-primary text-lg sm:text-xl mr-1.5 sm:mr-2" />
                  <h4 className="text-base sm:text-lg font-bold text-neutral-800">Agenda</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
                  Calendário de eventos, reuniões e datas importantes para a categoria.
                </p>
                <Link href="/member-area/calendar" className="text-primary text-xs sm:text-sm font-medium hover:text-primary-dark transition-colors duration-200">
                  Ver agenda
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border border-neutral-200 hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <LawIcon className="text-primary text-lg sm:text-xl mr-1.5 sm:mr-2" />
                  <h4 className="text-base sm:text-lg font-bold text-neutral-800">Legislação</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
                  Leis, decretos e normas relevantes para os auditores fiscais do DF.
                </p>
                <Link href="/member-area/legislation" className="text-primary text-xs sm:text-sm font-medium hover:text-primary-dark transition-colors duration-200">
                  Ver legislação
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border border-neutral-200 hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <QuestionAnswerIcon className="text-primary text-lg sm:text-xl mr-1.5 sm:mr-2" />
                  <h4 className="text-base sm:text-lg font-bold text-neutral-800">FAQ</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
                  Respostas para as perguntas mais frequentes sobre direitos e deveres.
                </p>
                <Link href="/member-area/faq" className="text-primary text-xs sm:text-sm font-medium hover:text-primary-dark transition-colors duration-200">
                  Ver perguntas
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
