import { useState, useEffect } from "react"

///////////// Example 1 /////////////////////
const WindowResizeDetector = ({ children }) => {
  const [width, setWidth] = useState()

  useEffect(() => {
    const listener = () => {
      const width = 0 // ..get window width here
      setWidth(width)
    }
    window.addEventListener("resize", listener)
  }, [])


  return <div>{children(width)}</div>
}

export default WindowResizeDetector

const Layout = () => {
  return (
    <>
      <WindowResizeDetector onWidthChange={setWidth}>
        {(width) => (width > 600 ? <WideLayout/> : <NarrowLayout/>)}
      </WindowResizeDetector>
    </>
  )
}

///////////// Example 2 /////////////////////
const PanelScrollDetector = () => {
  const [scroll, setScroll] = useState()

  const onScroll = (e) => {
    setScroll(e.currentTarget.scrollTop)
  }

  return <div onScroll={onScroll}>{children(scroll)}</div>
}
const BlogPage = () => {
  return (
    <PanelScrollDetector>
      {(scroll) => {
        const showSubscription = scroll > 500

        return (
          <>
            {
              showSubscription ? <SubscribeToMyBlogPanel /> : null
            }
            <SomeContent/>
          </>
        )
      }}
    </PanelScrollDetector>
  )
}

////////////// Example 3 ///////////////////
const Dialog = ({ footer }) => {
  return (
    <div className="dialog">
      Hello!
      <div className="footer">
        {footer}
      </div>
    </div>
  )
}

const Page = () => {
  const footer = <Button>Click me!</Button>

  return (
    <>
      <Dialog footer={footer}/>
    </>
  )
}

/////////// Example 4 //////////////////
const Button = ({ icon, text, appearance }) => {
  const iconHasSize = !!icon.props.size
  const updatedIcon = !iconHasSize ? React.cloneElement(icon, {
    size: appearance === 'large' ? 'large' : 'small'
  }) : icon
  return (
    <button>
      {updatedIcon}
      {text}
    </button>
  )
}

const smallButton = () => <Button icon={<CheckIcon />}>Send</Button>
const LargeButton = () => <Button appearance='large' icon={<CheckIcon size="large"/>}>Send</Button>