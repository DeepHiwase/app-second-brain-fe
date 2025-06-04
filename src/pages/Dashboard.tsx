import { Plus, Share2 } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/Card";
import AddContentModal from "../components/AddContentModal";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="bg-purple-50 h-screen">
      <Sidebar />
      <div className="ml-77">
        <Button
          variant="primary"
          size="md"
          text="Add Content"
          onClick={() => {
            setModalOpen(true);
          }}
          startIcon={<Plus />}
        />
        <Button
          variant="secondary"
          size="md"
          text="Share Brain"
          onClick={() => {}}
          startIcon={<Share2 />}
        />

        <AddContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="flex flex-wrap gap-2">
          {contents.map(({ title, link, type }) => (
            <Card title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
