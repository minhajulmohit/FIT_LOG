import MyPlanLayout from "@/components/myplancomponents/myplanlayout";

const myPlanLayout = ({ children }) => {
  return (
    <div>
      <MyPlanLayout>{children}</MyPlanLayout>
    </div>
  );
};

export default myPlanLayout;
