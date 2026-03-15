import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  User,
  Star,
  MessageSquare,
  Phone,
  ChevronDown,
  Building2,
  TrendingUp,
  Landmark,
  Shield,
  Scale,
  Sun,
  Moon,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTheme } from "next-themes";
import Image from "next/image";

const serviceSubItems = [
  { label: "Real Estate", href: "#services", icon: Building2 },
  { label: "Digital Property", href: "#services", icon: TrendingUp },
  { label: "All Types of Loans", href: "#services", icon: Landmark },
  { label: "Insurance", href: "#services", icon: Shield },
  { label: "Legal Advice", href: "#services", icon: Scale },
];

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  {
    label: "Services",
    href: "#services",
    icon: Briefcase,
    children: serviceSubItems,
  },
  { label: "About", href: "#about", icon: User },
  { label: "Why Us", href: "#why-us", icon: Star },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { label: "Contact", href: "#contact", icon: Phone },
];

const AppSidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { state, toggleSidebar, isMobile, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (isMobile) setOpenMobile(false);
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <Sidebar collapsible="icon" className="min-w-15">
      <SidebarHeader className="p-4">
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-3 group"
        >
          <div className="-ml-2 w-10 h-10 min-w-[2.5rem] rounded-xl bg-white from-primary via-primary-royal to-gold flex items-center justify-center shadow-glow-sm">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              height={100}
              width={100}
              className="h-9 w-9"
            />
            {/* <span className="text-primary-foreground font-bold text-lg">S</span> */}
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <span className="font-bold text-base text-sidebar-foreground block leading-tight">
                The Sadguru
              </span>
              <span className="font-medium text-xs text-muted-foreground block leading-tight">
                & Associates
              </span>
            </div>
          )}
        </button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                if (link.children) {
                  return (
                    <Collapsible key={link.label} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger>
                          <SidebarMenuButton
                            isActive={isActive}
                            tooltip={link.label}
                            className="cursor-pointer"
                          >
                            <link.icon className="h-4 w-4 ml-1 " />
                            <span className="flex-1">{link.label}</span>
                            {!collapsed && (
                              <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {!collapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {link.children.map((child) => (
                                <SidebarMenuSubItem key={child.label}>
                                  <SidebarMenuSubButton
                                    onClick={() => scrollToSection(child.href)}
                                    className="cursor-pointer"
                                  >
                                    <child.icon className="h-3.5 w-3.5" />
                                    <span>{child.label}</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="cursor-pointer"
                    >
                      <link.icon className="ml-1 h-4 w-4" />
                      <span>{link.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 space-y-2">
        {/* Dark mode toggle */}
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "sm"}
          className={
            collapsed ? "w-8 h-8 mx-auto" : "w-full justify-start gap-2"
          }
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {!collapsed && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
        </Button>

        {/* Sidebar collapse toggle (desktop only) */}
        {!isMobile && (
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "sm"}
            className={
              collapsed ? "w-8 h-8 mx-auto" : "w-full justify-start gap-2"
            }
            onClick={toggleSidebar}
          >
            {collapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
            {!collapsed && <span>Collapse</span>}
          </Button>
        )}

        {/* CTA */}
        {!collapsed ? (
          <Button
            variant="gradient"
            size="sm"
            className="w-full"
            onClick={() => scrollToSection("#contact")}
          >
            Get Free Consultation
          </Button>
        ) : (
          <Button
            variant="gradient"
            size="icon"
            className="w-8 h-8 mx-auto"
            onClick={() => scrollToSection("#contact")}
          >
            <Phone className="h-4 w-4" />
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
