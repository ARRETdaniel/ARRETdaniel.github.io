import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLanguageContext } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

interface LanguageSwitcherProps {
  fullWidth?: boolean;
}

const LanguageSwitcher = ({ fullWidth = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguageContext();
  const toast = useToast();
  // Default to 'en' in case language is undefined during SSR
  const [currentLang, setCurrentLang] = useState<"en" | "pt">("en");

  // Update the internal state once the component mounts
  useEffect(() => {
    if (language) {
      setCurrentLang(language as "en" | "pt");
    }
  }, [language]);

  const changeLanguage = (newLocale: "en" | "pt") => {
    if (language !== newLocale) {
      setLanguage(newLocale);
      setCurrentLang(newLocale);

      toast({
        title: newLocale === "en" ? "Language changed" : "Idioma alterado",
        description:
          newLocale === "en"
            ? "Website is now in English"
            : "Site agora está em Português",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        width={fullWidth ? "full" : "auto"}
        justifyContent={fullWidth ? "space-between" : "center"}
        borderRadius="md"
        fontWeight="medium">
        {currentLang === "en" ? "EN" : "PT"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("pt")}>Português</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
