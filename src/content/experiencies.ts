import { ExperiencieProps } from "../components/experience";
import pullup from "../assets/pullup.png"
import soujunior from "../assets/soujunior.png"

export const experiences: ExperiencieProps[] = [
  {
    company: "@Pullup Soluções em Sistemas Eletrônicos",
    companyImg: pullup,
    companyUrl: "https://www.pullup.com.br/",
    role: "Desenvolvedor Mobile & Front-End",
    period: `out 2023 - jun 2025, 1 ano e 9 meses`,
    description: "Desenvolvimento de aplicativos móveis com React Native e Expo, integrando recursos como notificações, Firebase, Apple Health Kit e gestão de estados. Criação de websites com React.js, incluindo autenticação, dashboards interativos e consumo de APIs. Implementação de funcionalidades como gráficos dinâmicos, fluxos de estado e responsividade."
  },
  {
    company: "@SouJunior Labs",
    companyImg: soujunior,
    companyUrl: "https://www.linkedin.com/company/soujunior-labs/",
    role: "Desenvolvedor Mobile Android",
    description: "Desenvolvimento de um aplicativo de diário de animais de estimação com controle de vacinas, alimentação e atividades diárias.",
    period: "jul 2023 - out 2023, 4 meses"
  }
];