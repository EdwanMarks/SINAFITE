import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, MenuIcon } from '@/components/ui/icons';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">SF</span>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold text-primary">Sinafite-DF</h1>
                  <p className="text-xs text-neutral-600 leading-tight">Sindicato dos Auditores Fiscais do DF</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink 
                      className={cn(
                        "text-neutral-700 font-medium hover:text-primary transition-colors duration-200 px-2 py-1",
                        isActive("/") && "text-primary-dark border-b-2 border-primary"
                      )}
                    >
                      Início
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-neutral-700 font-medium hover:text-primary transition-colors duration-200">
                    Sobre
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <Link href="/about">
                          <NavigationMenuLink className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            Quem Somos
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about#history">
                          <NavigationMenuLink className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            História
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about#board">
                          <NavigationMenuLink className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            Diretoria
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about#statute">
                          <NavigationMenuLink className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                            Estatuto
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/news">
                    <NavigationMenuLink 
                      className={cn(
                        "text-neutral-700 font-medium hover:text-primary transition-colors duration-200 px-2 py-1",
                        isActive("/news") && "text-primary-dark border-b-2 border-primary"
                      )}
                    >
                      Notícias
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/services">
                    <NavigationMenuLink 
                      className={cn(
                        "text-neutral-700 font-medium hover:text-primary transition-colors duration-200 px-2 py-1",
                        isActive("/services") && "text-primary-dark border-b-2 border-primary"
                      )}
                    >
                      Serviços
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink 
                      className={cn(
                        "text-neutral-700 font-medium hover:text-primary transition-colors duration-200 px-2 py-1",
                        isActive("/contact") && "text-primary-dark border-b-2 border-primary"
                      )}
                    >
                      Contato
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/member-area">
              <Button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                Área do Filiado
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/">
                    <div className={cn(
                      "px-3 py-2 text-base font-medium cursor-pointer",
                      isActive("/") ? "text-primary border-l-4 border-primary bg-primary/10" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
                    )}>
                      Início
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className={cn(
                      "px-3 py-2 text-base font-medium cursor-pointer",
                      isActive("/about") ? "text-primary border-l-4 border-primary bg-primary/10" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
                    )}>
                      Sobre
                    </div>
                  </Link>
                  <Link href="/news">
                    <div className={cn(
                      "px-3 py-2 text-base font-medium cursor-pointer",
                      isActive("/news") ? "text-primary border-l-4 border-primary bg-primary/10" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
                    )}>
                      Notícias
                    </div>
                  </Link>
                  <Link href="/services">
                    <div className={cn(
                      "px-3 py-2 text-base font-medium cursor-pointer",
                      isActive("/services") ? "text-primary border-l-4 border-primary bg-primary/10" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
                    )}>
                      Serviços
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className={cn(
                      "px-3 py-2 text-base font-medium cursor-pointer",
                      isActive("/contact") ? "text-primary border-l-4 border-primary bg-primary/10" : "text-neutral-700 hover:text-primary hover:bg-neutral-100"
                    )}>
                      Contato
                    </div>
                  </Link>
                  <Link href="/member-area">
                    <div className="mt-4 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-dark cursor-pointer">
                      Área do Filiado
                    </div>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
