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
    <div className="bg-purple-50 h-screen p-5">
      <Sidebar />
      <div className="ml-65">
        <div className="flex gap-2 justify-between">
          <div className="text-2xl font-bold text-primary">All Content</div>
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="md"
              text="Add Content"
              onClick={() => {
                setModalOpen(true);
              }}
              startIcon={<Plus width={20} />}
            />
            <Button
              variant="secondary"
              size="md"
              text="Share Brain"
              onClick={() => {}}
              startIcon={<Share2 width={20} />}
            />
          </div>
        </div>

        

        <div className="flex flex-wrap gap-3 pt-3">
          {contents.map(({ title, link, type }) => (
            <Card key={link} title={title} link={link} type={type} />
          ))}
        </div>
        <AddContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
