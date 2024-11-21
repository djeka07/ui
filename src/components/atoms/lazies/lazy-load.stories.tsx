import { Meta, StoryObj } from '@storybook/react';
import LazyLoad from './lazy-load';
import { Typography } from '../typographies';
import { UserBadge } from '../badges';

const meta: Meta<typeof LazyLoad> = {
  title: 'Atoms/Lazies/LazyLoad',
  component: LazyLoad,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const All: Story = {
  render: () => (
    <div>
      <Typography variant="hero">Hero</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non malesuada nisl. Ut consectetur tincidunt
        sapien, vitae feugiat nunc iaculis non. Vivamus aliquet lacus vel dui malesuada, non fermentum lorem aliquet.
        Nam viverra, velit a vehicula tincidunt, ligula est vulputate enim, sit amet tincidunt lectus velit non lorem.
        Curabitur eget diam sit amet ante suscipit dictum. Integer sollicitudin, eros nec congue hendrerit, purus urna
        vestibulum leo, vel sodales urna odio ac lorem. Vestibulum nec lacus purus. Etiam euismod sollicitudin metus, a
        fringilla purus interdum eget. Fusce ac sapien in erat varius lacinia vel non libero. Phasellus eget risus ac
        nisl luctus convallis. Sed varius risus justo, a lobortis nulla tempor ac. Donec luctus malesuada eros non
        suscipit. Nulla placerat nibh ac velit maximus, non mollis eros placerat. Integer ullamcorper metus at nulla
        vehicula, et pharetra tortor dictum. Aenean sit amet leo at justo feugiat facilisis. Maecenas feugiat est ut
        sollicitudin auctor. Sed ac volutpat velit. Nulla facilisi. Morbi scelerisque ante non est dictum, eget placerat
        ipsum convallis. Cras tempor enim eget arcu fringilla feugiat. Nam vel eros gravida,
      </Typography>
      <Typography variant="p">
        vehicula turpis et, scelerisque elit. Sed tempor orci sed felis lacinia, in rhoncus nulla sodales. Integer
        facilisis, odio ac vehicula ullamcorper, tortor purus tincidunt magna, eget porttitor purus ligula et turpis.
        Mauris fringilla, risus sit amet cursus consectetur, ipsum libero cursus libero, ut volutpat lectus ligula a
        dui. Proin a velit sed nisi fermentum scelerisque. Integer condimentum magna at ante volutpat, at placerat nunc
        tincidunt. Quisque feugiat eros metus, nec dictum justo dictum vel.
      </Typography>
      <Typography variant="p">
        Morbi ut lectus eget sem malesuada venenatis sit amet at tortor. Fusce ultricies nisi nec tempor sodales. Etiam
        fringilla odio et erat mollis, a porttitor odio vehicula. In ac turpis scelerisque, laoreet sapien ac, efficitur
        elit. Ut faucibus orci ut est volutpat, nec tempus lectus congue. Integer bibendum dui ut urna viverra feugiat.
        Donec rhoncus, nisl sit amet tincidunt ullamcorper, erat sem luctus libero, et condimentum risus nulla ut est.
        Etiam at feugiat magna. Vivamus suscipit leo vel nisi tincidunt, eu ullamcorper lorem vehicula. Vivamus vitae
        tortor non velit facilisis tempus. Etiam fermentum libero ut cursus placerat. Pellentesque tincidunt lectus vel
        erat hendrerit tristique. Aliquam sollicitudin sem sit amet vehicula fringilla. Vivamus euismod augue vitae odio
        euismod, in gravida lorem laoreet. Nam malesuada euismod ipsum non dignissim. Ut et justo sed purus condimentum
        viverra vel vel est. Nam malesuada vel felis ut lobortis. Nulla et velit sit amet est volutpat efficitur.
        Suspendisse iaculis laoreet lorem non laoreet. Integer nec interdum enim. Curabitur a nisl tempor, scelerisque
        neque nec, elementum velit. Fusce et nunc varius, volutpat elit ut, cursus nulla. Nullam interdum laoreet velit,
        in maximus ligula pharetra a. Sed vitae velit mollis, ullamcorper mi nec, rutrum felis. Sed vitae bibendum est,
        ac tincidunt enim. Ut auctor mi augue, eget tristique felis malesuada et. Vivamus luctus eros eu arcu porttitor,
        et euismod justo congue. Donec auctor sapien sit amet orci scelerisque, in viverra ligula tempor. Aliquam
        laoreet nisl eget auctor feugiat. Curabitur a ipsum felis. Donec vitae lobortis nunc. Suspendisse tincidunt,
        turpis at laoreet sodales, purus purus consectetur lectus, at pharetra lorem felis vel ante. Integer in ligula
        vel sapien dapibus tincidunt eget nec orci. Proin imperdiet nunc vel nisl consequat, a tempor ante tincidunt.
        Etiam sed ex hendrerit, aliquam erat sit amet, tincidunt eros. Aenean vel erat metus. In rhoncus et augue sit
        amet mollis. Fusce vel varius felis, non tincidunt ipsum. Aliquam erat volutpat. Proin vitae orci sed sapien
        laoreet euismod id ut nunc. Curabitur in ipsum purus. Pellentesque sagittis pharetra leo, vel consequat mi
        tempus ut. Nam id purus ut augue scelerisque feugiat at et turpis. In nec velit est. Suspendisse et nulla ac
        odio vehicula feugiat at eget nisl. Integer dapibus dui at orci aliquam vestibulum. Integer non tortor sit amet
        velit gravida lacinia. Nullam ultricies erat ut nunc placerat, a egestas nisi laoreet. Quisque condimentum velit
        in lectus auctor, id tempus libero tristique. Aliquam tristique mi sit amet nunc hendrerit, sit amet finibus
        orci tincidunt. Ut venenatis leo at interdum tempor. Phasellus vehicula ut nunc et gravida. Sed convallis metus
        ut odio faucibus, id tristique ante vehicula. Proin viverra leo orci, sit amet vehicula lectus luctus vel. Nam
        ultricies sapien ac purus lobortis, vitae rutrum risus posuere.
      </Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non malesuada nisl. Ut consectetur tincidunt
        sapien, vitae feugiat nunc iaculis non. Vivamus aliquet lacus vel dui malesuada, non fermentum lorem aliquet.
        Nam viverra, velit a vehicula tincidunt, ligula est vulputate enim, sit amet tincidunt lectus velit non lorem.
        Curabitur eget diam sit amet ante suscipit dictum. Integer sollicitudin, eros nec congue hendrerit, purus urna
        vestibulum leo, vel sodales urna odio ac lorem. Vestibulum nec lacus purus. Etiam euismod sollicitudin metus, a
        fringilla purus interdum eget. Fusce ac sapien in erat varius lacinia vel non libero. Phasellus eget risus ac
        nisl luctus convallis. Sed varius risus justo, a lobortis nulla tempor ac. Donec luctus malesuada eros non
        suscipit. Nulla placerat nibh ac velit maximus, non mollis eros placerat. Integer ullamcorper metus at nulla
        vehicula, et pharetra tortor dictum. Aenean sit amet leo at justo feugiat facilisis. Maecenas feugiat est ut
        sollicitudin auctor. Sed ac volutpat velit. Nulla facilisi. Morbi scelerisque ante non est dictum, eget placerat
        ipsum convallis. Cras tempor enim eget arcu fringilla feugiat. Nam vel eros gravida,
      </Typography>
      <Typography variant="p">
        vehicula turpis et, scelerisque elit. Sed tempor orci sed felis lacinia, in rhoncus nulla sodales. Integer
        facilisis, odio ac vehicula ullamcorper, tortor purus tincidunt magna, eget porttitor purus ligula et turpis.
        Mauris fringilla, risus sit amet cursus consectetur, ipsum libero cursus libero, ut volutpat lectus ligula a
        dui. Proin a velit sed nisi fermentum scelerisque. Integer condimentum magna at ante volutpat, at placerat nunc
        tincidunt. Quisque feugiat eros metus, nec dictum justo dictum vel.
      </Typography>
      <Typography variant="p">
        Morbi ut lectus eget sem malesuada venenatis sit amet at tortor. Fusce ultricies nisi nec tempor sodales. Etiam
        fringilla odio et erat mollis, a porttitor odio vehicula. In ac turpis scelerisque, laoreet sapien ac, efficitur
        elit. Ut faucibus orci ut est volutpat, nec tempus lectus congue. Integer bibendum dui ut urna viverra feugiat.
        Donec rhoncus, nisl sit amet tincidunt ullamcorper, erat sem luctus libero, et condimentum risus nulla ut est.
        Etiam at feugiat magna. Vivamus suscipit leo vel nisi tincidunt, eu ullamcorper lorem vehicula. Vivamus vitae
        tortor non velit facilisis tempus. Etiam fermentum libero ut cursus placerat. Pellentesque tincidunt lectus vel
        erat hendrerit tristique. Aliquam sollicitudin sem sit amet vehicula fringilla. Vivamus euismod augue vitae odio
        euismod, in gravida lorem laoreet. Nam malesuada euismod ipsum non dignissim. Ut et justo sed purus condimentum
        viverra vel vel est. Nam malesuada vel felis ut lobortis. Nulla et velit sit amet est volutpat efficitur.
        Suspendisse iaculis laoreet lorem non laoreet. Integer nec interdum enim. Curabitur a nisl tempor, scelerisque
        neque nec, elementum velit. Fusce et nunc varius, volutpat elit ut, cursus nulla. Nullam interdum laoreet velit,
        in maximus ligula pharetra a. Sed vitae velit mollis, ullamcorper mi nec, rutrum felis. Sed vitae bibendum est,
        ac tincidunt enim. Ut auctor mi augue, eget tristique felis malesuada et. Vivamus luctus eros eu arcu porttitor,
        et euismod justo congue. Donec auctor sapien sit amet orci scelerisque, in viverra ligula tempor. Aliquam
        laoreet nisl eget auctor feugiat. Curabitur a ipsum felis. Donec vitae lobortis nunc. Suspendisse tincidunt,
        turpis at laoreet sodales, purus purus consectetur lectus, at pharetra lorem felis vel ante. Integer in ligula
        vel sapien dapibus tincidunt eget nec orci. Proin imperdiet nunc vel nisl consequat, a tempor ante tincidunt.
        Etiam sed ex hendrerit, aliquam erat sit amet, tincidunt eros. Aenean vel erat metus. In rhoncus et augue sit
        amet mollis. Fusce vel varius felis, non tincidunt ipsum. Aliquam erat volutpat. Proin vitae orci sed sapien
        laoreet euismod id ut nunc. Curabitur in ipsum purus. Pellentesque sagittis pharetra leo, vel consequat mi
        tempus ut. Nam id purus ut augue scelerisque feugiat at et turpis. In nec velit est. Suspendisse et nulla ac
        odio vehicula feugiat at eget nisl. Integer dapibus dui at orci aliquam vestibulum. Integer non tortor sit amet
        velit gravida lacinia. Nullam ultricies erat ut nunc placerat, a egestas nisi laoreet. Quisque condimentum velit
        in lectus auctor, id tempus libero tristique. Aliquam tristique mi sit amet nunc hendrerit, sit amet finibus
        orci tincidunt. Ut venenatis leo at interdum tempor. Phasellus vehicula ut nunc et gravida. Sed convallis metus
        ut odio faucibus, id tristique ante vehicula. Proin viverra leo orci, sit amet vehicula lectus luctus vel. Nam
        ultricies sapien ac purus lobortis, vitae rutrum risus posuere.
      </Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non malesuada nisl. Ut consectetur tincidunt
        sapien, vitae feugiat nunc iaculis non. Vivamus aliquet lacus vel dui malesuada, non fermentum lorem aliquet.
        Nam viverra, velit a vehicula tincidunt, ligula est vulputate enim, sit amet tincidunt lectus velit non lorem.
        Curabitur eget diam sit amet ante suscipit dictum. Integer sollicitudin, eros nec congue hendrerit, purus urna
        vestibulum leo, vel sodales urna odio ac lorem. Vestibulum nec lacus purus. Etiam euismod sollicitudin metus, a
        fringilla purus interdum eget. Fusce ac sapien in erat varius lacinia vel non libero. Phasellus eget risus ac
        nisl luctus convallis. Sed varius risus justo, a lobortis nulla tempor ac. Donec luctus malesuada eros non
        suscipit. Nulla placerat nibh ac velit maximus, non mollis eros placerat. Integer ullamcorper metus at nulla
        vehicula, et pharetra tortor dictum. Aenean sit amet leo at justo feugiat facilisis. Maecenas feugiat est ut
        sollicitudin auctor. Sed ac volutpat velit. Nulla facilisi. Morbi scelerisque ante non est dictum, eget placerat
        ipsum convallis. Cras tempor enim eget arcu fringilla feugiat. Nam vel eros gravida,
      </Typography>
      <Typography variant="p">
        vehicula turpis et, scelerisque elit. Sed tempor orci sed felis lacinia, in rhoncus nulla sodales. Integer
        facilisis, odio ac vehicula ullamcorper, tortor purus tincidunt magna, eget porttitor purus ligula et turpis.
        Mauris fringilla, risus sit amet cursus consectetur, ipsum libero cursus libero, ut volutpat lectus ligula a
        dui. Proin a velit sed nisi fermentum scelerisque. Integer condimentum magna at ante volutpat, at placerat nunc
        tincidunt. Quisque feugiat eros metus, nec dictum justo dictum vel.
      </Typography>
      <LazyLoad height={30}>
        <UserBadge user={{ firstName: 'Test', lastName: 'Test' }} />
      </LazyLoad>
      <Typography variant="p">
        Morbi ut lectus eget sem malesuada venenatis sit amet at tortor. Fusce ultricies nisi nec tempor sodales. Etiam
        fringilla odio et erat mollis, a porttitor odio vehicula. In ac turpis scelerisque, laoreet sapien ac, efficitur
        elit. Ut faucibus orci ut est volutpat, nec tempus lectus congue. Integer bibendum dui ut urna viverra feugiat.
        Donec rhoncus, nisl sit amet tincidunt ullamcorper, erat sem luctus libero, et condimentum risus nulla ut est.
        Etiam at feugiat magna. Vivamus suscipit leo vel nisi tincidunt, eu ullamcorper lorem vehicula. Vivamus vitae
        tortor non velit facilisis tempus. Etiam fermentum libero ut cursus placerat. Pellentesque tincidunt lectus vel
        erat hendrerit tristique. Aliquam sollicitudin sem sit amet vehicula fringilla. Vivamus euismod augue vitae odio
        euismod, in gravida lorem laoreet. Nam malesuada euismod ipsum non dignissim. Ut et justo sed purus condimentum
        viverra vel vel est. Nam malesuada vel felis ut lobortis. Nulla et velit sit amet est volutpat efficitur.
        Suspendisse iaculis laoreet lorem non laoreet. Integer nec interdum enim. Curabitur a nisl tempor, scelerisque
        neque nec, elementum velit. Fusce et nunc varius, volutpat elit ut, cursus nulla. Nullam interdum laoreet velit,
        in maximus ligula pharetra a. Sed vitae velit mollis, ullamcorper mi nec, rutrum felis. Sed vitae bibendum est,
        ac tincidunt enim. Ut auctor mi augue, eget tristique felis malesuada et. Vivamus luctus eros eu arcu porttitor,
        et euismod justo congue. Donec auctor sapien sit amet orci scelerisque, in viverra ligula tempor. Aliquam
        laoreet nisl eget auctor feugiat. Curabitur a ipsum felis. Donec vitae lobortis nunc. Suspendisse tincidunt,
        turpis at laoreet sodales, purus purus consectetur lectus, at pharetra lorem felis vel ante. Integer in ligula
        vel sapien dapibus tincidunt eget nec orci. Proin imperdiet nunc vel nisl consequat, a tempor ante tincidunt.
        Etiam sed ex hendrerit, aliquam erat sit amet, tincidunt eros. Aenean vel erat metus. In rhoncus et augue sit
        amet mollis. Fusce vel varius felis, non tincidunt ipsum. Aliquam erat volutpat. Proin vitae orci sed sapien
        laoreet euismod id ut nunc. Curabitur in ipsum purus. Pellentesque sagittis pharetra leo, vel consequat mi
        tempus ut. Nam id purus ut augue scelerisque feugiat at et turpis. In nec velit est. Suspendisse et nulla ac
        odio vehicula feugiat at eget nisl. Integer dapibus dui at orci aliquam vestibulum. Integer non tortor sit amet
        velit gravida lacinia. Nullam ultricies erat ut nunc placerat, a egestas nisi laoreet. Quisque condimentum velit
        in lectus auctor, id tempus libero tristique. Aliquam tristique mi sit amet nunc hendrerit, sit amet finibus
        orci tincidunt. Ut venenatis leo at interdum tempor. Phasellus vehicula ut nunc et gravida. Sed convallis metus
        ut odio faucibus, id tristique ante vehicula. Proin viverra leo orci, sit amet vehicula lectus luctus vel. Nam
        ultricies sapien ac purus lobortis, vitae rutrum risus posuere.
      </Typography>
      <LazyLoad>
        <UserBadge user={{ firstName: 'Test', lastName: 'Test' }} />
      </LazyLoad>
    </div>
  ),
};
