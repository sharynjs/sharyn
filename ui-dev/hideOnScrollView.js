// @flow

import React from 'react'
// flow-disable-next-line
import AppBar from '@material-ui/core/AppBar'
// flow-disable-next-line
import ToolBar from '@material-ui/core/ToolBar'
// flow-disable-next-line
import { withStyles } from '@material-ui/core/styles'
// flow-disable-next-line
import Typography from '@material-ui/core/Typography'

import hideOnScroll from '../packages/hocs/src/hide-on-scroll'

const styles = ({ mixins }) => ({ appBarPusher: mixins.toolbar })

const AutoHideAppBar = hideOnScroll(AppBar)

const App = withStyles(styles)(({ classes }: { classes: Object }) => (
  <div>
    <AutoHideAppBar className="hide-on-scroll">
      <ToolBar>
        <Typography variant="title" color="inherit">
          Photos
        </Typography>
      </ToolBar>
    </AutoHideAppBar>
    <div className={classes.appBarPusher} />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum in eros cursus
      facilisis. Duis malesuada neque non dui semper pulvinar. Curabitur at lacus ultrices,
      hendrerit urna viverra, elementum lacus. Cras vel hendrerit libero, in lobortis odio.
      Curabitur vel est nec dolor feugiat ultricies vitae quis odio. Nam vulputate fermentum
      feugiat. Nulla porta lorem et tortor eleifend, sit amet iaculis est bibendum. Nunc ullamcorper
      semper magna vitae rutrum. Proin urna orci, consequat rutrum luctus vel, consequat in nisl.
      Phasellus molestie lorem leo, id accumsan arcu aliquam ut. Mauris et pharetra velit. Nunc
      congue arcu sit amet iaculis facilisis. Aenean quis suscipit odio, pharetra mollis libero.
      Phasellus ac lacus quis est eleifend laoreet vel sed tortor. Aenean scelerisque commodo dui,
      sit amet interdum metus egestas vitae. Aliquam malesuada est in consectetur rutrum.
      Pellentesque at semper sem. In hac habitasse platea dictumst. Mauris vehicula dignissim
      accumsan. In vitae nisl eros. Vestibulum accumsan libero in tempor mollis. Cras suscipit
      malesuada blandit. Vivamus et ullamcorper nibh, eu faucibus velit. Mauris nec dapibus velit.
      Sed sagittis, risus finibus facilisis consectetur, leo neque pretium magna, a luctus ipsum est
      sed lacus. Nullam convallis vel purus vel bibendum. Pellentesque at massa erat. Quisque elit
      augue, dictum eget elit ac, efficitur dapibus magna. Nulla facilisi. Nulla laoreet egestas
      eros, ut lacinia lacus aliquam vel. Curabitur quis pellentesque mi. Sed vulputate ac lacus et
      dignissim. Ut dignissim condimentum massa maximus pulvinar. Vivamus fermentum nunc sed lectus
      volutpat tempor. Pellentesque pharetra enim vel commodo blandit. Nullam non commodo elit, eu
      auctor turpis. Integer non tempor mi, eu vestibulum lorem. Ut consequat ac sapien et viverra.
      Duis in bibendum purus. Fusce tincidunt finibus nunc, id eleifend lacus fringilla quis. Etiam
      erat velit, pretium sit amet ex nec, accumsan laoreet ante. Donec venenatis quam mattis
      posuere porta. Sed semper, turpis quis eleifend suscipit, libero nibh pellentesque elit, vitae
      suscipit massa justo quis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Ut eu est pretium, vehicula felis sagittis, maximus mi.
      Phasellus in lectus sit amet justo fermentum eleifend. Mauris arcu sapien, lobortis vel
      accumsan id, tincidunt sed turpis. Cras quis vehicula mauris. Cras dictum risus sed erat
      commodo efficitur. Ut tempor iaculis arcu quis commodo. Phasellus mollis lacus id augue
      egestas, eu pulvinar ante dapibus. Nam a tortor ac metus tincidunt iaculis ut at nulla.
      Praesent pulvinar orci mauris. Nam a viverra nulla, facilisis pulvinar nibh. Nulla aliquet mi
      nec ornare pharetra. Mauris ultrices faucibus felis, id posuere velit convallis at. Integer
      eget nisl sed tortor placerat dictum ac eu magna. Maecenas feugiat dolor posuere lorem
      viverra, nec suscipit nunc eleifend. Phasellus non turpis dui. Cras vulputate sapien purus,
      eget vulputate justo accumsan sed. Aliquam ut porttitor quam, in sollicitudin lectus.
      Suspendisse potenti. Proin consectetur magna sit amet interdum vestibulum. Pellentesque in
      cursus est, ut porta tortor. Cras vel nibh ut felis sollicitudin mattis. Sed pharetra tempor
      ornare. Pellentesque ac interdum nibh, eu pretium nibh. Mauris venenatis sit amet massa non
      tincidunt. Integer sodales magna non leo commodo mollis. Vestibulum eu pellentesque magna.
      Mauris mi ipsum, feugiat in augue at, finibus pharetra massa. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Curabitur eu ipsum in eros cursus facilisis. Duis malesuada neque
      non dui semper pulvinar. Curabitur at lacus ultrices, hendrerit urna viverra, elementum lacus.
      Cras vel hendrerit libero, in lobortis odio. Curabitur vel est nec dolor feugiat ultricies
      vitae quis odio. Nam vulputate fermentum feugiat. Nulla porta lorem et tortor eleifend, sit
      amet iaculis est bibendum. Nunc ullamcorper semper magna vitae rutrum. Proin urna orci,
      consequat rutrum luctus vel, consequat in nisl. Phasellus molestie lorem leo, id accumsan arcu
      aliquam ut. Mauris et pharetra velit. Nunc congue arcu sit amet iaculis facilisis. Aenean quis
      suscipit odio, pharetra mollis libero. Phasellus ac lacus quis est eleifend laoreet vel sed
      tortor. Aenean scelerisque commodo dui, sit amet interdum metus egestas vitae. Aliquam
      malesuada est in consectetur rutrum. Pellentesque at semper sem. In hac habitasse platea
      dictumst. Mauris vehicula dignissim accumsan. In vitae nisl eros. Vestibulum accumsan libero
      in tempor mollis. Cras suscipit malesuada blandit. Vivamus et ullamcorper nibh, eu faucibus
      velit. Mauris nec dapibus velit. Sed sagittis, risus finibus facilisis consectetur, leo neque
      pretium magna, a luctus ipsum est sed lacus. Nullam convallis vel purus vel bibendum.
      Pellentesque at massa erat. Quisque elit augue, dictum eget elit ac, efficitur dapibus magna.
      Nulla facilisi. Nulla laoreet egestas eros, ut lacinia lacus aliquam vel. Curabitur quis
      pellentesque mi. Sed vulputate ac lacus et dignissim. Ut dignissim condimentum massa maximus
      pulvinar. Vivamus fermentum nunc sed lectus volutpat tempor. Pellentesque pharetra enim vel
      commodo blandit. Nullam non commodo elit, eu auctor turpis. Integer non tempor mi, eu
      vestibulum lorem. Ut consequat ac sapien et viverra. Duis in bibendum purus. Fusce tincidunt
      finibus nunc, id eleifend lacus fringilla quis. Etiam erat velit, pretium sit amet ex nec,
      accumsan laoreet ante. Donec venenatis quam mattis posuere porta. Sed semper, turpis quis
      eleifend suscipit, libero nibh pellentesque elit, vitae suscipit massa justo quis ligula.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eu
      est pretium, vehicula felis sagittis, maximus mi. Phasellus in lectus sit amet justo fermentum
      eleifend. Mauris arcu sapien, lobortis vel accumsan id, tincidunt sed turpis. Cras quis
      vehicula mauris. Cras dictum risus sed erat commodo efficitur. Ut tempor iaculis arcu quis
      commodo. Phasellus mollis lacus id augue egestas, eu pulvinar ante dapibus. Nam a tortor ac
      metus tincidunt iaculis ut at nulla. Praesent pulvinar orci mauris. Nam a viverra nulla,
      facilisis pulvinar nibh. Nulla aliquet mi nec ornare pharetra. Mauris ultrices faucibus felis,
      id posuere velit convallis at. Integer eget nisl sed tortor placerat dictum ac eu magna.
      Maecenas feugiat dolor posuere lorem viverra, nec suscipit nunc eleifend. Phasellus non turpis
      dui. Cras vulputate sapien purus, eget vulputate justo accumsan sed. Aliquam ut porttitor
      quam, in sollicitudin lectus. Suspendisse potenti. Proin consectetur magna sit amet interdum
      vestibulum. Pellentesque in cursus est, ut porta tortor. Cras vel nibh ut felis sollicitudin
      mattis. Sed pharetra tempor ornare. Pellentesque ac interdum nibh, eu pretium nibh. Mauris
      venenatis sit amet massa non tincidunt. Integer sodales magna non leo commodo mollis.
      Vestibulum eu pellentesque magna. Mauris mi ipsum, feugiat in augue at, finibus pharetra
      massa. Cras suscipit malesuada blandit. Vivamus et ullamcorper nibh, eu faucibus velit. Mauris
      nec dapibus velit. Sed sagittis, risus finibus facilisis consectetur, leo neque pretium magna,
      a luctus ipsum est sed lacus. Nullam convallis vel purus vel bibendum. Pellentesque at massa
      erat. Quisque elit augue, dictum eget elit ac, efficitur dapibus magna. Nulla facilisi. Nulla
      laoreet egestas eros, ut lacinia lacus aliquam vel. Curabitur quis pellentesque mi. Sed
      vulputate ac lacus et dignissim. Ut dignissim condimentum massa maximus pulvinar. Vivamus
      fermentum nunc sed lectus volutpat tempor. Pellentesque pharetra enim vel commodo blandit.
      Nullam non commodo elit, eu auctor turpis. Integer non tempor mi, eu vestibulum lorem. Ut
      consequat ac sapien et viverra. Duis in bibendum purus. Fusce tincidunt finibus nunc, id
      eleifend lacus fringilla quis. Etiam erat velit, pretium sit amet ex nec, accumsan laoreet
      ante. Donec venenatis quam mattis posuere porta. Sed semper, turpis quis eleifend suscipit,
      libero nibh pellentesque elit, vitae suscipit massa justo quis ligula. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eu est pretium, vehicula
      felis sagittis, maximus mi. Phasellus in lectus sit amet justo fermentum eleifend. Mauris arcu
      sapien, lobortis vel accumsan id, tincidunt sed turpis. Cras quis vehicula mauris. Cras dictum
      risus sed erat commodo efficitur. Ut tempor iaculis arcu quis commodo. Phasellus mollis lacus
      id augue egestas, eu pulvinar ante dapibus. Nam a tortor ac metus tincidunt iaculis ut at
      nulla. Praesent pulvinar orci mauris. Nam a viverra nulla, facilisis pulvinar nibh. Nulla
      aliquet mi nec ornare pharetra. Mauris ultrices faucibus felis, id posuere velit convallis at.
      Integer eget nisl sed tortor placerat dictum ac eu magna. Maecenas feugiat dolor posuere lorem
      viverra, nec suscipit nunc eleifend. Phasellus non turpis dui. Cras vulputate sapien purus,
      eget vulputate justo accumsan sed. Aliquam ut porttitor quam, in sollicitudin lectus.
      Suspendisse potenti. Proin consectetur magna sit amet interdum vestibulum. Pellentesque in
      cursus est, ut porta tortor. Cras vel nibh ut felis sollicitudin mattis. Sed pharetra tempor
      ornare. Pellentesque ac interdum nibh, eu pretium nibh. Mauris venenatis sit amet massa non
      tincidunt. Integer sodales magna non leo commodo mollis. Vestibulum eu pellentesque magna.
      Mauris mi ipsum, feugiat in augue at, finibus pharetra massa. Cras suscipit malesuada blandit.
      Vivamus et ullamcorper nibh, eu faucibus velit. Mauris nec dapibus velit. Sed sagittis, risus
      finibus facilisis consectetur, leo neque pretium magna, a luctus ipsum est sed lacus. Nullam
      convallis vel purus vel bibendum. Pellentesque at massa erat. Quisque elit augue, dictum eget
      elit ac, efficitur dapibus magna. Nulla facilisi. Nulla laoreet egestas eros, ut lacinia lacus
      aliquam vel. Curabitur quis pellentesque mi. Sed vulputate ac lacus et dignissim. Ut dignissim
      condimentum massa maximus pulvinar. Vivamus fermentum nunc sed lectus volutpat tempor.
      Pellentesque pharetra enim vel commodo blandit. Nullam non commodo elit, eu auctor turpis.
      Integer non tempor mi, eu vestibulum lorem. Ut consequat ac sapien et viverra. Duis in
      bibendum purus. Fusce tincidunt finibus nunc, id eleifend lacus fringilla quis. Etiam erat
      velit, pretium sit amet ex nec, accumsan laoreet ante. Donec venenatis quam mattis posuere
      porta. Sed semper, turpis quis eleifend suscipit, libero nibh pellentesque elit, vitae
      suscipit massa justo quis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Ut eu est pretium, vehicula felis sagittis, maximus mi.
      Phasellus in lectus sit amet justo fermentum eleifend. Mauris arcu sapien, lobortis vel
      accumsan id, tincidunt sed turpis. Cras quis vehicula mauris. Cras dictum risus sed erat
      commodo efficitur. Ut tempor iaculis arcu quis commodo. Phasellus mollis lacus id augue
      egestas, eu pulvinar ante dapibus. Nam a tortor ac metus tincidunt iaculis ut at nulla.
      Praesent pulvinar orci mauris. Nam a viverra nulla, facilisis pulvinar nibh. Nulla aliquet mi
      nec ornare pharetra. Mauris ultrices faucibus felis, id posuere velit convallis at. Integer
      eget nisl sed tortor placerat dictum ac eu magna. Maecenas feugiat dolor posuere lorem
      viverra, nec suscipit nunc eleifend. Phasellus non turpis dui. Cras vulputate sapien purus,
      eget vulputate justo accumsan sed. Aliquam ut porttitor quam, in sollicitudin lectus.
      Suspendisse potenti. Proin consectetur magna sit amet interdum vestibulum. Pellentesque in
      cursus est, ut porta tortor. Cras vel nibh ut felis sollicitudin mattis. Sed pharetra tempor
      ornare. Pellentesque ac interdum nibh, eu pretium nibh. Mauris venenatis sit amet massa non
      tincidunt. Integer sodales magna non leo commodo mollis. Vestibulum eu pellentesque magna.
      Mauris mi ipsum, feugiat in augue at, finibus pharetra massa.
    </div>
  </div>
))

const PageView = () => <App foo="foo" />

export default PageView
