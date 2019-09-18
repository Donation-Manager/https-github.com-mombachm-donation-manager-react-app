import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@rmwc/icon/icon.css';
import { Card, CardPrimaryAction } from '@rmwc/card';
import { GridList, GridTile, GridTilePrimary, GridTileTitle, GridTileSecondary } from '@rmwc/grid-list';
import { Typography } from '@rmwc/typography';
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/typography/dist/mdc.typography.css';

const Home: React.FC = () => {

  return (
    <div>
      <GridList>
        <GridTile>
          <Link to="/donationIntention">
            <GridTilePrimary>
            </GridTilePrimary>
            <GridTileSecondary>
                <GridTileTitle>
                  Cadastro de Intenções
                </GridTileTitle>
            </GridTileSecondary>
          </Link>
        </GridTile>
        <GridTile>
          <Link to="/donations">
            <GridTilePrimary>
            </GridTilePrimary>
            <GridTileSecondary>
                <GridTileTitle>
                  Doações
                </GridTileTitle>
            </GridTileSecondary>
          </Link>
        </GridTile>
      </GridList>
    </div>
  );
}

export default Home;
