"use client";

import { Container, Badge } from 'react-bootstrap';
import styles from './NewsTicker.module.css'; 

const NewsTicker = () => {
  const news = [
    "آخر الأخبار: تم إطلاق النسخة الجديدة من مشروعنا اليوم!",
    "تنبيه: تحديثات أمنية هامة لجميع المستخدمين.",
    "خبر عاجل: شراكة جديدة تهدف لتطوير خدمات الذكاء الاصطناعي.",
  ];
const neews = [...news, ...news]
  return (
    <div className="bg-body w-100  text-body  d-flex align-items-center">
      <Container className="d-flex align-items-center">
        {/* عنوان الشريط ثابت */}
        <Badge bg="dark" className="me-0 px-3 py-2 z-3">آخر الأخبار</Badge>
        
        {/* منطقة النصوص المتحركة */}
        <div className={styles.tickerWrapper} >
          <div className={styles.tickerContent}>
            {neews.map((item, index) => (
              <span key={index} className="mx-4 text-nowrap">
                {item}
              </span>
            ))}
            {neews.map((item, index) => (
              <span key={`dup-${index}`} className="mx-4 text-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsTicker;