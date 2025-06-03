import { Plus, Share2 } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/Card";
import AddContentModal from "../components/AddContentModal";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

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

      <div className="grid md:grid-cols-3 gap-2">
        <Card
          title="Project Ideas"
          link="https://youtu.be/RcFn6k4UY28?si=rDy95qFzjfZaJCHW"
          type="youtube"
        />

        <Card
          title="Project Ideas"
          link="https://x.com/krish_agr/status/1929874035153699015"
          type="twitter"
        />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
