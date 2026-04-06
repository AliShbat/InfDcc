// تأكد من استيراد أيقونات مثل bootstrap-icons أو font-awesome إذا كنت تستخدمها
import {
  BsLightningCharge,
  BsShieldCheck,
  BsCpu,
  BsGlobe,
} from "react-icons/bs";

const Creditcard = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* القسم الأيمن: عمودين وثلاثة أسطر (6 كروت) */}
        <div className="col-lg-9 order-lg-1">
          <div className="row g-1">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-md-6 h-100">
                <div className="card shadow-sm ">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur ipsam.
                    </h5>
                  </div>
                  <img
                    src="/InfDcc/cart1.jpg"
                    className="card-img-top "
                    alt="Card Title"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* القسم الأيسر: كارد كبير وتحته سطرين بعمودين */}
        <div className="col-lg-3 order-lg-2">
          <div className="row g-3">
            {/* الكارد العلوي الكبير */}
            <div className="col-12">
              <div className="card h-100 shadow-sm">
                <img
                  src="/cart7.jpg"
                  className="card-img-top "
                  alt="Card Title"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur ipsam.
                  </h5>
                </div>
              </div>
            </div>

            {/* سطرين بعمودين (4 كروت صغيرة بأيقونات) */}
            {[
              { icon: <BsShieldCheck size={70} />, title: "عدد الاعضاء المسجلين" },
              { icon: <BsCpu size={80} />, title: "عدد الاعضاء المجددين" },
              { icon: <BsGlobe size={80} />, title: "عدد الخدمات المقدمة للاعضاء" },
              { icon: <BsLightningCharge size={80} />, title: "عدد شهادات التصدير" },
            ].map((feature, index) => (
              <div key={index} className="col-6 ">
                <div className="card h-100 border-0 shadow-sm text-center p-3">
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <h6 className="card-title mb-0">{feature.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
