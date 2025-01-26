import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Welcome to the online home of the Affable Bean Grocery.</h3>
              <br/>
              <p className="lead">Enjoy browsing and learning more about our unique home delivery service
                bringing
                you fresh organic product,dairy,meat,bread and other delicious and healthy items to your
                doorstep.
              </p>
            </div>
            <div className="col mt-2">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <Link href="/products/1">
                      <Image src="/images/categories/dairy.jpg" alt="dairy image"
                             className="card-img-top shadow-lg" width={350} height={230}/>
                    </Link>

                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <Link href="/products/2">
                      <Image src="/images/categories/meats.jpg" alt="meats image"
                             className="card-img-top shadow-lg" width={350} height={230}/>
                    </Link>

                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="card">
                    <Link href="/products/3">
                      <Image src="/images/categories/bakery.jpg" alt="bakery image"
                             className="card-img-top shadow-lg" width={350} height={230}/>
                    </Link>

                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <Link href="/products/4">
                      <Image src="/images/categories/fruit_veg.jpg" alt="fruit_veg image"
                             className="card-img-top shadow-lg" width={350} height={230}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>);
}