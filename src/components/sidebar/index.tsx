import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { Package, PanelBottom } from "lucide-react"

export function Sidebar(){
    return(
        <div className="flex w-full flex-col bg-muted/40">
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl:14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sn:hidden">
                                <PanelBottom className="w-5 h-5"/>
                                <span className="sr-only">Abrir / fechar</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-x">
                            <nav className="grid gap-6 text-lg font-medium">

                                <Link 
                                    href="#"
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all"/>
                                    <span className="sr-only">Logo</span>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}