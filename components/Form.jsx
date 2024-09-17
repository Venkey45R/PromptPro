import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="flex-col justify-start w-full max-w-full">
      <h1 className="text-left head_text">
        <span className=" blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts to the world and let imagination run wild with and AI powered platform.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism">
        <label><span className="text-base font-semibold text-gray-700 font-satoshi">Your AI prompt</span></label>
        <textarea value={post.prompt} onChange={(e) => setPost({...post, prompt:e.target.value})} placeholder="Write your prompt here..." required className="font_textarea"/>
        <label><span className="text-base font-semibold text-gray-700 font-satoshi">Tag {` `}<span className="font-normal ">(#product, #webdev)</span></span></label>
        <input value={post.tag} onChange={(e) => setPost({...post, tag:e.target.value})} placeholder="#tag" required className="font_input"/>
        <div className="flex justify-end gap-4 mx-3 mb-5 ">
          <Link href="/" className="text-sm text-gray-500 ">Cancel</Link>
          <button type="submit" disabled={submitting} className="px-5 py-2 text-sm text-white rounded-full  bg-primary-orange">{submitting ? `${type}...` : type}</button>
        </div>
      </form>
    </section>
  )
}

export default Form