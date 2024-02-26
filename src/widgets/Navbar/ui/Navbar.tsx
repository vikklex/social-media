import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={handleModalOpen}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        ldlldlldldlldkdkdkkdkd kdkdkkdkdkd jdjdjjdjdjjdjd jdjdjjdjdj
      </Modal>
    </div>
  );
};
