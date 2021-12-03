import { Divider, List, ListItem, ListItemText } from "@mui/material";
import "./styles.css";
import usePagination from '@mui/material/usePagination';

const notices = [
  {
    id: 1,
    title: 'お知らせタイトルの文字数が多い場合は省略された形になる想定です。',
    date: '2021-07-07 15:32',
    category: 'カテゴリー1',
  },
  {
    id: 2,
    title: 'お知らせタイトルの文字数が多い場合は省略された形になる想定です。',
    date: '2021-07-07 10:43',
    category: 'カテゴリー2',
  },
  {
    id: 3,
    title: 'お知らせタイトルの文字数が多い場合は省略された形になる想定です。',
    date: '2021-07-04 17:40',
    category: 'カテゴリー3',
  },
  {
    id: 4,
    title: 'お知らせタイトルの文字数が多い場合は省略された形になる想定です。',
    date: '2021-07-04 09:12',
    category: 'カテゴリー4',
  },
  {
    id: 5,
    title: 'お知らせタイトルの文字数が多い場合は省略された形になる想定です。',
    date: '2021-07-03 22:21',
    category: 'カテゴリー5',
  },
];

export default function App() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <div className="App">
      <List>
      {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
        {/* 
        <ListItem>
          <ListItemText primary="test"/>
        </ListItem>
        */}
        <Divider />
      </List>
    </div>
  );
}
