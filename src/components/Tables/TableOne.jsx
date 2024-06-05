
import Image from "next/image";

const brandData = [
  {
    logo: "/images/user/user-01.png",
    name: "Sayed Redwan",
    visitors: 'sayed@gmail.com',
    revenues: 19750543546,
    sales: 'Gold',
    conversion: '02-06-2024',
  },
  {
    logo: "/images/user/user-01.png",
    name: "Rumman Haydar",
    visitors: 'rumman@gmail.com',
    revenues: 19750543546,
    sales: 'Platinum',
    conversion: '02-06-2024',
  },
  {
    logo: "/images/user/user-01.png",
    name: 'Jeni Sayra',
    visitors: 'jeni@gmail.com',
    revenues: 19750543546,
    sales: 'Ace',
    conversion: '02-06-2024',
  },
  {
    logo: "/images/user/user-01.png",
    name: 'Fardin Ahsan',
    visitors: 'fardin@gmail.com',
    revenues: 19750543546,
    sales: 'Gold',
    conversion: '02-06-2024',
  },
  {
    logo: "/images/user/user-01.png",
    name: "Rafid Ahnaf",
    visitors: 'sadib@gmail.com',
    revenues: 19750543546,
    sales: 'Platinum',
    conversion: '02-06-2024',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Premium Members
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              E-mail
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Phone
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Membership Type
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">+880{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
