import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './footer.style'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const changeLanguage = lng => i18n.changeLanguage(lng)

  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 MyShop. Tất cả các quyền được bảo lưu</div>
          <S.Language>
            {t('footer.language')}:
            <span
              onClick={() => changeLanguage('en')}
              className={classNames({ active: i18n.language === 'en' })}
            >
              Tiếng Anh
            </span>
            <span
              onClick={() => changeLanguage('vi')}
              className={classNames({ active: i18n.language === 'vi' })}
            >
              Tiếng Việt
            </span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH MyShop</div>
          <div>
            Địa chỉ: Tầng 22, Tòa nhà trung tâm International Hà Nội, 55 Liễu
            Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ:
            191231221 - Email: cskh@hotro.myshop.vn
          </div>
          <div>
            Mã số doanh nghiệp: 010612312786 do Sở Kế hoạch & Đầu tư TP Hà Nội
            cấp lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH MyShop</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
