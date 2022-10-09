/**
 * <ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>

Описание компонента FriendListItem
Компонент должен принимать несколько пропов:

avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.
 */

import { FriendListItem } from './FriendListItem';
import friends from '../../json/friends.json';

export const FriendList = () => (
  <ul>
    <FriendListItem friends={friends} />
  </ul>
);
