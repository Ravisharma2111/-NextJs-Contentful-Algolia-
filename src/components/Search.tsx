// components/Search.tsx
import { SetStateAction, useState } from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';

interface SearchProps {
  // Add any props if needed
}



const searchClient = algoliasearch('X4E0G26EBR', '12c8dc7eb6a245387db4745f839ef853');

const Search: React.FC<SearchProps> = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="your_index_name">
        <SearchBox
          autoFocus
          onChange={(e: { target: { value: SetStateAction<string> }; }) => setQuery(e.target.value)}
        />
        <Hits hitComponent={({ hit }: { hit: any }) => <Hit hit={hit} />} />
      </InstantSearch>
    </div>
  );
};

interface HitProps {
  hit: {
    slug: string;
    title: string;
    excerpt: string;
    // Add other properties as needed
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => (
  <div>
    <Link href={`/post/${hit.slug}`}>
      <a>
        <h3>{hit.title}</h3>
      </a>
    </Link>
    <p>{hit.excerpt}</p>
  </div>
);

export default Search;
