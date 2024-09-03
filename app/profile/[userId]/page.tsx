import MainProfile from "@/components/profile/MainProfile";

const Page = ({ params }: { params: { userId: string } }) => {
  return <MainProfile params={params} />;
};

export default Page;
