import Button from "./Button";
import Card from "./Card";
function App(){
  return <div>
    <h1>Hello from react</h1>
    <h2>Test </h2>
    <Button name="Downland"/>
    <Button name="Test"/>
    <Card img="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
    title="Eyes"
    description ="Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos."
    />
     <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
    title="Title 1"
    description ="Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures."
    />
      <Card img="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
    title="Title 2"
    description ="FreDownload the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing.e stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures."
    />
    
  
  </div>
}

export default App;