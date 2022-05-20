import { cls } from '../lib/utils';

type TagZoneProps = {
  tags: string[];
  handleTagClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tagClicked: string;
};

export default function TagZone({ tags, handleTagClick, tagClicked }: TagZoneProps) {
  return (
    <div className='my-10 flex overflow-scroll'>
      {tags.map((tag) => {
        return (
          <button
            onClick={handleTagClick}
            name={tag}
            className={cls(
              'mr-4 rounded-md border-2 py-2 px-4 text-sm font-bold',
              tagClicked === tag ? ' border-teal-400 bg-slate-700 text-teal-400' : 'bg-slate-200 text-slate-700'
            )}
            key={tag}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
