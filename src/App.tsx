import { Plus, Share2 } from "lucide-react";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <div>
      <Button
        variant="primary"
        size="md"
        text="Add Content"
        onClick={() => {}}
        startIcon={<Plus />}
      />
      <Button
        variant="secondary"
        size="md"
        text="Share Brain"
        onClick={() => {}}
        startIcon={<Share2 />}
      />
    </div>
  );
};

export default App;
