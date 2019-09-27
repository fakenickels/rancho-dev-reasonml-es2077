[@react.component]
let make = (~children) =>
  <p className=Css.(style([padding(px(30))]))>
    children
  </p>

let default = make;
