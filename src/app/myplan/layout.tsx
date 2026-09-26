import MyPlanLayout from "@/components/myplancomponents/myplanlayout";

const myPlanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-2 md:mx-0">
      <MyPlanLayout>{children}</MyPlanLayout>
    </div>
  );
};

export default myPlanLayout;
