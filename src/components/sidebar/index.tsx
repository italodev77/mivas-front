import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { LineChart, Package, PanelBottom, ShoppingBag, User, X } from "lucide-react"

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl:14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5" />
                                <span className="sr-only">Abrir / fechar</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-xs p-4">
                            {/* Botão de fechar no topo */}
                            <div className="flex justify-end">
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="w-5 h-5" />
                                        <span className="sr-only">Fechar</span>
                                    </Button>
                                </SheetClose>
                            </div>

                            {/* Navegação */}
                            <nav className="grid gap-6 text-lg font-medium mt-4">
                                <Link 
                                    href="#"
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all" />
                                    <span className="sr-only">Logo</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <ShoppingBag className="h-5 w-5" />
                                    Pedidos
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Package className="h-5 w-5" />
                                    Produtos
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <User className="h-5 w-5" />
                                    Clientes
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Configurações
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}
