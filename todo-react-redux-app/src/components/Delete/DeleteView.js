import { useState } from 'react';

const DeleteView = ({ logout, component, onlyOnMobile = false }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery({
    query: '(min-width: 900px)'
  });

  const popupQuit = {
    title: t('settings.disconnectText'),
    image: quitPopupImg,
    onConfirm: () => logout()
  };
  return (
    <>
      <ModalUI
        display={showModal}
        onClose={() => setShowModal(false)}
        content={
          <>
            <div className="exoPopuptitle">{popupQuit.title}</div>
            {popupQuit.image && (
              <div className="exoPopupImage">
                <img src={popupQuit.image} alt="" />
              </div>
            )}
            <div className="exoPopupActions">
              <div>
                <OrangeButton
                  style={{ width: '150px' }}
                  onClick={popupQuit.onConfirm}
                >
                  {t('exercises.quit')}
                </OrangeButton>
              </div>
              <div>
                <div
                  style={{ width: '150px' }}
                  className="dontKnowText"
                  onClick={() => setShowModal(false)}
                >
                  {t('exercises.cancel')}
                </div>
              </div>
            </div>
          </>
        }
        borderColor={'rgba(0, 57, 143, 0.6)'}
      />
      {onlyOnMobile && !isSmallScreen && (
        <div onClick={() => setShowModal(true)}>{component}</div>
      )}
      {!onlyOnMobile && (
        <div onClick={() => setShowModal(true)}>{component}</div>
      )}
    </>
  );
};

export default DeleteView;
