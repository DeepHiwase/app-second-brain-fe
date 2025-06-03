import { Plus, Share2 } from "lucide-react";
import Button from "./components/ui/Button";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-purple-50 h-screen">
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

      <Card title="Project Ideas" content={<iframe width={260} src="https://www.youtube.com/embed/pXJ2qoGU88g?si=l8T3ALpuYaJTmxVH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} />
      <br />
      <br />
      <br />
      <Card title="Project Ideas" content={<div><blockquote className="twitter-tweet"><p lang="it" dir="ltr">Monorepo + Turborepo = 🔥 <a href="https://t.co/Q4d0nTyM7u">pic.twitter.com/Q4d0nTyM7u</a></p>&mdash; Pontus Abrahamsson — oss/acc (@pontusab) <a href="https://twitter.com/pontusab/status/1921536916136374456?ref_src=twsrc%5Etfw">May 11, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></div>} />
    </div>
  );
};

export default App;
