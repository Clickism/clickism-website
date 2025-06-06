import {ReactNode} from "react";

export default function MainContent(props: {children: ReactNode[]}) {
  return (
    <div className="main-content">
      {props.children.map((child, index) => (
        <div key={index} className="main-content-item">
          {child}
        </div>
      ))}
    </div>
  )
}
