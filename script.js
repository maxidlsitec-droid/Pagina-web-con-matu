document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. DICCIONARIO DE TRADUCCIONES (i18n)
    // ==========================================
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_prices: "Precios",
            nav_team: "Equipo",
            nav_contact: "Contacto",
            available: "Servicio profesional",
            hero_title_1: "Refrigeración",
            hero_description: "Soluciones profesionales en refrigeración, aire acondicionado y electricidad industrial. Calidad, experiencia y responsabilidad en cada trabajo.",
            request_service: "Solicitar servicio",
            view_services: "Ver servicios",
            team_members: "Profesionales",
            professional: "Profesional",
            attention: "Atención",
            hero_card_title: "Expertos en frío",
            hero_card_text: "Refrigeración residencial, comercial e industrial.",
            electricity: "Electricidad industrial",
            air_conditioning: "Aire acondicionado",
            maintenance: "Mantenimiento",
            what_we_do: "LO QUE HACEMOS",
            services_title: "Servicios profesionales",
            services_description: "Nos encargamos de que tus equipos funcionen de manera eficiente, segura y confiable.",
            service_1_title: "Refrigeración",
            service_1_text: "Instalación, reparación y mantenimiento de sistemas de refrigeración.",
            learn_more: "Consultar",
            service_2_title: "Aire acondicionado",
            service_2_text: "Limpieza, mantenimiento y revisión de equipos de aire acondicionado.",
            see_prices: "Ver precios",
            service_3_title: "Electricidad industrial",
            service_3_text: "Soluciones eléctricas y mantenimiento para instalaciones industriales.",
            service_4_title: "Diagnóstico",
            service_4_text: "Revisamos el problema y determinamos la mejor solución para tu equipo.",
            request_visit: "Solicitar visita",
            our_prices: "NUESTROS PRECIOS",
            prices_title: "Tarifas claras y transparentes",
            prices_description: "Conocé nuestros precios base antes de solicitar el servicio.",
            basic: "BÁSICO",
            visit_title: "Visita técnica",
            visit_description: "Visita al domicilio para revisar el equipo y detectar la falla.",
            price_1: "Revisión del equipo",
            price_2: "Diagnóstico inicial",
            price_3: "Presupuesto de reparación",
            recommended: "RECOMENDADO",
            maintenance_tag: "MANTENIMIENTO",
            cleaning_title: "Lavado de aire",
            cleaning_description: "Limpieza profesional del equipo de aire acondicionado.",
            clean_1: "Limpieza del equipo",
            clean_2: "Limpieza de filtros",
            clean_3: "Mantenimiento general",
            clean_4: "Control de funcionamiento",
            book_cleaning: "Solicitar lavado",
            price_note: "Los precios indicados corresponden a tarifas base. Trabajos, repuestos o reparaciones adicionales pueden tener un costo diferente.",
            technical_experience: "TÉCNICO ESPECIALIZADO",
            professional_service: "Servicio profesional",
            about_us: "SOBRE NOSOTROS",
            about_title: "Experiencia técnica al servicio de tu equipo",
            about_text_1: "Refrigeración Aldo es un emprendimiento dedicado a brindar soluciones profesionales en refrigeración, climatización y electricidad industrial.",
            about_text_2: "El dueño y técnico principal se encarga de supervisar los trabajos, realizar diagnósticos y brindar soluciones técnicas de calidad.",
            skill_1: "Refrigeración",
            skill_2: "Electricidad industrial",
            skill_3: "Mantenimiento",
            our_team: "NUESTRO EQUIPO",
            team_title: "Personas detrás del servicio",
            team_description: "Un equipo comprometido con realizar cada trabajo de forma responsable y profesional.",
            owner: "DUEÑO / TÉCNICO",
            owner_description: "Técnico en refrigeración y electricidad industrial. Encargado general de la empresa y responsable de los trabajos técnicos.",
            refrigeration: "Refrigeración",
            employee: "EMPLEADO",
            employee_1: "Técnico de servicio",
            employee_1_description: "Apoyo técnico en instalaciones, mantenimiento y trabajos de campo.",
            technical_support: "Apoyo técnico",
            employee_2: "Asistente técnico",
            employee_2_description: "Asistencia en mantenimiento, limpieza e instalaciones de equipos.",
            assistance: "Asistencia",
            our_process: "NUESTRO PROCESO",
            process_title: "Simple, rápido y profesional",
            process_1_title: "Contactanos",
            process_1_text: "Escribinos por WhatsApp y contanos qué problema tiene tu equipo.",
            process_2_title: "Revisamos",
            process_2_text: "Analizamos el equipo y encontramos la causa del problema.",
            process_3_title: "Solucionamos",
            process_3_text: "Realizamos el trabajo necesario para dejar tu equipo funcionando correctamente.",
            contact_us: "CONTACTANOS",
            contact_title: "¿Necesitás un técnico?",
            contact_description: "Escribinos por WhatsApp para consultar precios, solicitar una visita o coordinar un servicio.",
            whatsapp: "WhatsApp",
            specialty: "Especialidad",
            specialty_text: "Refrigeración y electricidad industrial",
            quick_contact: "CONTACTO RÁPIDO",
            send_message: "Solicitar servicio"
        },
        pt: {
            nav_home: "Início",
            nav_services: "Serviços",
            nav_prices: "Preços",
            nav_team: "Equipe",
            nav_contact: "Contato",
            available: "Serviço profissional",
            hero_title_1: "Refrigeração",
            hero_description: "Soluções profissionais em refrigeração, ar condicionado e eletricidade industrial. Qualidade e responsabilidade.",
            request_service: "Solicitar serviço",
            view_services: "Ver serviços",
            team_members: "Profissionais",
            professional: "Profissional",
            attention: "Atendimento",
            hero_card_title: "Especialistas em frio",
            hero_card_text: "Refrigeração residencial, comercial e industrial.",
            electricity: "Eletricidade industrial",
            air_conditioning: "Ar condicionado",
            maintenance: "Manutenção",
            what_we_do: "O QUE FAZEMOS",
            services_title: "Serviços profissionais",
            services_description: "Garantimos que seus equipamentos funcionem de maneira eficiente e segura.",
            service_1_title: "Refrigeração",
            service_1_text: "Instalação, reparo e manutenção de sistemas de refrigeração.",
            learn_more: "Consultar",
            service_2_title: "Ar condicionado",
            service_2_text: "Limpeza, manutenção e revisão de equipamentos de ar condicionado.",
            see_prices: "Ver preços",
            service_3_title: "Eletricidade industrial",
            service_3_text: "Soluções elétricas e manutenção para instalações industriais.",
            service_4_title: "Diagnóstico",
            service_4_text: "Analisamos o problema e determinamos a melhor solução.",
            request_visit: "Solicitar visita",
            our_prices: "NOSSOS PREÇOS",
            prices_title: "Tarifas claras e transparentes",
            prices_description: "Conheça nossos preços base antes de solicitar o serviço.",
            basic: "BÁSICO",
            visit_title: "Visita técnica",
            visit_description: "Visita ao local para revisar o equipamento e detectar a falha.",
            price_1: "Revisão do equipamento",
            price_2: "Diagnóstico inicial",
            price_3: "Orçamento de reparo",
            recommended: "RECOMENDADO",
            maintenance_tag: "MANUTENÇÃO",
            cleaning_title: "Higienização de ar",
            cleaning_description: "Limpeza profissional do equipamento de ar condicionado.",
            clean_1: "Limpeza do equipamento",
            clean_2: "Limpeza de filtros",
            clean_3: "Manutenção geral",
            clean_4: "Controle de funcionamento",
            book_cleaning: "Solicitar limpeza",
            price_note: "Os preços indicados correspondem a tarifas base. Peças adicionais podem ter custo extra.",
            technical_experience: "TÉCNICO ESPECIALIZADO",
            professional_service: "Serviço profissional",
            about_us: "SOBRE NÓS",
            about_title: "Experiência técnica ao serviço do seu equipamento",
            about_text_1: "Refrigeración Aldo oferece soluções profissionais em refrigeração e eletricidade industrial.",
            about_text_2: "O técnico principal supervisiona todos os trabalhos para garantir máxima qualidade.",
            skill_1: "Refrigeração",
            skill_2: "Eletricidade industrial",
            skill_3: "Manutenção",
            our_team: "NOSSA EQUIPE",
            team_title: "Pessoas por trás do serviço",
            team_description: "Uma equipe comprometida em realizar cada trabalho com responsabilidade.",
            owner: "PROPRIETÁRIO / TÉCNICO",
            owner_description: "Técnico em refrigeração e eletricidade industrial. Responsável geral pela empresa.",
            refrigeration: "Refrigeração",
            employee: "FUNCIONÁRIO",
            employee_1: "Técnico de serviço",
            employee_1_description: "Suporte técnico em instalações e manutenção de campo.",
            technical_support: "Suporte técnico",
            employee_2: "Assistente técnico",
            employee_2_description: "Assistência em manutenção e limpeza de equipamentos.",
            assistance: "Assistência",
            our_process: "NOSSO PROCESSO",
            process_title: "Simples, rápido e profissional",
            process_1_title: "Fale conosco",
            process_1_text: "Envie uma mensagem pelo WhatsApp e conte-nos o problema.",
            process_2_title: "Analisamos",
            process_2_text: "Inspecionamos o equipamento para diagnosticar o defeito.",
            process_3_title: "Resolvemos",
            process_3_text: "Realizamos o reparo necessário para o funcionamento correto.",
            contact_us: "CONTATO",
            contact_title: "Precisa de um técnico?",
            contact_description: "Fale conosco pelo WhatsApp para agendar uma visita ou solicitar orçamento.",
            whatsapp: "WhatsApp",
            specialty: "Especialidade",
            specialty_text: "Refrigeração e eletricidade industrial",
            quick_contact: "CONTATO RÁPIDO",
            send_message: "Solicitar serviço"
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_prices: "Prices",
            nav_team: "Team",
            nav_contact: "Contact",
            available: "Professional service",
            hero_title_1: "Refrigeration",
            hero_description: "Professional solutions in refrigeration, air conditioning, and industrial electricity. Quality and reliability.",
            request_service: "Request service",
            view_services: "View services",
            team_members: "Professionals",
            professional: "Professional",
            attention: "Support",
            hero_card_title: "Cooling Experts",
            hero_card_text: "Residential, commercial, and industrial refrigeration.",
            electricity: "Industrial electricity",
            air_conditioning: "Air conditioning",
            maintenance: "Maintenance",
            what_we_do: "WHAT WE DO",
            services_title: "Professional Services",
            services_description: "We ensure your equipment operates efficiently, safely, and reliably.",
            service_1_title: "Refrigeration",
            service_1_text: "Installation, repair, and maintenance of refrigeration systems.",
            learn_more: "Inquire",
            service_2_title: "Air Conditioning",
            service_2_text: "Cleaning, maintenance, and inspection of AC units.",
            see_prices: "View prices",
            service_3_title: "Industrial Electricity",
            service_3_text: "Electrical solutions and maintenance for industrial facilities.",
            service_4_title: "Diagnostics",
            service_4_text: "We identify the issue and provide the best solution.",
            request_visit: "Book a visit",
            our_prices: "OUR PRICES",
            prices_title: "Clear and Transparent Rates",
            prices_description: "Check our base rates before requesting service.",
            basic: "BASIC",
            visit_title: "Technical Visit",
            visit_description: "On-site visit to inspect equipment and identify technical issues.",
            price_1: "Equipment inspection",
            price_2: "Initial diagnosis",
            price_3: "Repair quote",
            recommended: "RECOMMENDED",
            maintenance_tag: "MAINTENANCE",
            cleaning_title: "AC Deep Cleaning",
            cleaning_description: "Professional cleaning and sanitization for air conditioning units.",
            clean_1: "Unit deep cleaning",
            clean_2: "Filter cleaning",
            clean_3: "General maintenance",
            clean_4: "Operational check",
            book_cleaning: "Book cleaning",
            price_note: "Listed prices are base rates. Additional repairs or spare parts may affect final cost.",
            technical_experience: "SPECIALIZED TECHNICIAN",
            professional_service: "Professional service",
            about_us: "ABOUT US",
            about_title: "Technical expertise dedicated to your equipment",
            about_text_1: "Refrigeración Aldo provides specialized services in HVAC and industrial electricity.",
            about_text_2: "Our Lead Technician oversees every job to ensure high quality standard.",
            skill_1: "Refrigeration",
            skill_2: "Industrial Electricity",
            skill_3: "Maintenance",
            our_team: "OUR TEAM",
            team_title: "The People Behind the Service",
            team_description: "A committed team delivering responsible and technical service.",
            owner: "OWNER / TECHNICIAN",
            owner_description: "Technician in HVAC and industrial electricity. Main manager and technical supervisor.",
            refrigeration: "Refrigeration",
            employee: "EMPLOYEE",
            employee_1: "Service Technician",
            employee_1_description: "Technical support in installation, maintenance, and field operations.",
            technical_support: "Technical support",
            employee_2: "Technical Assistant",
            employee_2_description: "Assisting in equipment cleaning, setup, and maintenance.",
            assistance: "Assistance",
            our_process: "OUR PROCESS",
            process_title: "Simple, Fast & Professional",
            process_1_title: "Contact Us",
            process_1_text: "Message us on WhatsApp and tell us about your equipment's issue.",
            process_2_title: "Inspection",
            process_2_text: "We inspect the system to diagnose the root cause.",
            process_3_title: "Solution",
            process_3_text: "We complete necessary repairs to get your equipment running smoothly.",
            contact_us: "CONTACT US",
            contact_title: "Need a technician?",
            contact_description: "Message us on WhatsApp to inquire about rates or schedule a visit.",
            whatsapp: "WhatsApp",
            specialty: "Specialty",
            specialty_text: "Refrigeration & Industrial Electricity",
            quick_contact: "QUICK CONTACT",
            send_message: "Request service"
        }
    };

    // ==========================================
    // 2. CAMBIO DE IDIOMA
    // ==========================================
    const languageSelector = document.getElementById("languageSelector");

    const setLanguage = (lang) => {
        const elementsToTranslate = document.querySelectorAll("[data-i18n]");
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem("selectedLanguage", lang);
    };

    // Escuchar cambios en el selector de idioma
    if (languageSelector) {
        languageSelector.addEventListener("change", (e) => {
            setLanguage(e.target.value);
        });

        // Cargar el idioma guardado o por defecto "es"
        const savedLang = localStorage.getItem("selectedLanguage") || "es";
        languageSelector.value = savedLang;
        setLanguage(savedLang);
    }

    // ==========================================
    // 3. MODO OSCURO (DARK MODE)
    // ==========================================
    const themeToggleBtn = document.getElementById("themeToggle");
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    const toggleTheme = () => {
        document.body.classList.toggle("dark-theme");
        const isDarkMode = document.body.classList.contains("dark-theme");

        // Cambiar ícono
        if (themeIcon) {
            if (isDarkMode) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }
        }

        // Guardar preferencia
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", toggleTheme);

        // Cargar preferencia guardada del tema
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }
        }
    }

    // ==========================================
    // 4. MENÚ MÓVIL TOGGLE
    // ==========================================
    const menuToggleBtn = document.getElementById("menuToggle");
    const navMenu = document.getElementById("nav");
    const menuIcon = menuToggleBtn ? menuToggleBtn.querySelector("i") : null;

    if (menuToggleBtn && navMenu) {
        menuToggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            // Alternar ícono de barras a X
            if (menuIcon) {
                if (navMenu.classList.contains("active")) {
                    menuIcon.classList.remove("fa-bars");
                    menuIcon.classList.add("fa-xmark");
                } else {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
            }
        });

        // Cerrar menú al hacer click en un enlace de navegación
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
            });
        });
    }

    // ==========================================
    // 5. EFECTO SCROLL EN HEADER
    // ==========================================
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});