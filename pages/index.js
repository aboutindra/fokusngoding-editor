import dynamic from 'next/dynamic'
const CodeEditor = dynamic(import('../components/index'), {ssr: false})

export default () => {
  return (
    <div>
      <CodeEditor/>
    </div>
  )
}