
import { 
  BsFacebook, BsTwitterX, BsInstagram, BsLinkedin, 
  BsEnvelope, BsTelephone, BsGeoAlt 
} from 'react-icons/bs';

const CustomFooter = () => {
  return (
    <footer className=" text-body  pb-3 border-top border-secondary bg-body " /* style={{background:"#327799"}} */>
      <div className="container" dir="rtl">
        <div className="row g-4 align-items-center">
          
          {/* القسم الأول: خريطة جوجل (Google Map) */}
          <div className="col-md-4">
            <div className="rounded overflow-hidden shadow-sm border border-secondary" style={{ height: '150px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3326.6746865037144!2d36.304501!3d33.50984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7cfd62ef2cf%3A0x67a1180a1c599d44!2z2LrYsdmB2Kkg2KrYrNin2LHYqSDYr9mF2LTZgg!5e0!3m2!1sen!2sus!4v1775465512593!5m2!1sen!2sus " 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* القسم الثاني: معلومات التواصل (العنوان، الهاتف، البريد) */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-body mb-3 fw-bold">تواصل معنا</h5>
            <div className="d-flex align-items-center mb-2 justify-content-center justify-content-md-start">
              <BsGeoAlt className="ms-2 text-warning" />
              <span>الحريقة-دمشق-سوريا</span>
            </div>
            <div className="d-flex align-items-center mb-2 justify-content-center justify-content-md-start">
              <BsTelephone className="ms-2 text-warning" />
              <span dir="ltr">+963944009935</span>
            </div>
            <div className="d-flex align-items-center mb-2 justify-content-center justify-content-md-start">
              <BsEnvelope className="ms-2 text-warning" />
              <span>info@dcc.sy</span>
            </div>
          </div>

          {/* القسم الثالث: أيقونات التواصل الاجتماعي */}
          <div className="col-md-4 text-center text-body">
            <div className=" d-flex justify-content-center gap-3">
              <a href="#" className="text-body social-icon"><BsFacebook size={50} /></a>
              <a href="#" className="text-body social-icon"><BsTwitterX size={50} /></a>
              <a href="#" className="text-body social-icon"><BsInstagram size={50} /></a>
              <a href="#" className="text-body social-icon"><BsLinkedin size={50} /></a>
            </div>
          </div>

        </div>

        <hr className="my-4 border-secondary opacity-25" />
        
        <div className="text-center ">
          <p className="small text-light mb-0">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
