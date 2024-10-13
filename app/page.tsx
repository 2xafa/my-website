import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div>
      <h1 
        className="mb-8 text-2xl font-semibold tracking-tighter">
          <Image
        src="/safa.png"
        width={200}
        height={200}
        alt="safa demirdağ"
      />
        safa demirdağ
        
      </h1>
        
      </div>
      
      
      <p className="mb-4">
        {`I am a dedicated SysAdmin/DevOps professional with a passion for managing both cloud-based and on-premise infrastructures. My expertise lies in system administration, network management, and automation. I enjoy optimizing server performance, ensuring cybersecurity, and implementing efficient backup solutions. With a strong focus on problem-solving and continuous learning, I strive to deliver reliable and scalable IT solutions.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      
    </section>
  )
}
