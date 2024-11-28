/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate } from '@djeka07/dates';
import { useDidMount } from '@djeka07/hooks';
import { sleep } from '@djeka07/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode, useCallback, useState } from 'react';
import Grid from './grid';
import { CellRenderParams, ColumnDefinitionType, ColumnType, GetRowsParams } from './grid.type';

const dataPath = 'https://staticaks.blob.core.windows.net/static/test/data.json';

const meta: Meta<typeof Grid> = {
  title: 'Molecules/Grids/Grid',
  component: Grid,
  tags: ['!autodocs'],
};

type GridData = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  number: string;
  date: string;
};

const DateRenderer = (props: CellRenderParams<GridData>): ReactNode => <div>{formatDate(props.value as string)}</div>;

const columnDefinition: ColumnDefinitionType[] = [
  {
    field: 'firstName',
    fieldName: 'Förnamn',
    type: ColumnType.Text,
  },
  {
    field: 'lastName',
    fieldName: 'Efternamn',
    type: ColumnType.Text,
  },
  {
    field: 'userName',
    fieldName: 'Användarnamn',
    type: ColumnType.Text,
  },
  {
    field: 'email',
    fieldName: 'E-post',
    type: ColumnType.Text,
  },
  {
    field: 'number',
    fieldName: 'Nummer',
    type: ColumnType.Number,
  },
  {
    field: 'date',
    fieldName: 'Datum',
    cellRenderer: 'dateRenderer',
    type: ColumnType.Date,
  },
];

export default meta;
type Story = StoryObj<typeof Grid>;

export const ServerGridSuccess: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getRows = useCallback(async (params: GetRowsParams<GridData>) => {
      const { startRow, endRow } = params.request;

      await sleep(startRow !== 0 ? 1000 : 1000);
      const response = await fetch(dataPath);
      const data = await response.json();
      params.success({ items: data.slice(startRow, endRow), total: data.length });
    }, []);
    return (
      <div style={{ height: 'calc(100vh - 48px)' }}>
        <Grid
          pageSize={50}
          pagination="infinite"
          rowModelType="server"
          defaultColumnDefinition={{ autoFill: false, minWidth: 100, width: 200 }}
          getRowId={(params) => (params as any).id}
          getRows={getRows}
          renderers={{ dateRenderer: DateRenderer }}
          columnDefinition={columnDefinition}
        />
      </div>
    );
  },
};

export const ServerGridWithHiddenColumns: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getRows = useCallback(async (params: GetRowsParams<GridData>) => {
      const { startRow, endRow } = params.request;

      await sleep(startRow !== 0 ? 1000 : 1000);
      const response = await fetch(dataPath);
      const data = await response.json();
      params.success({ items: data.slice(startRow, endRow), total: data.length });
    }, []);
    return (
      <div style={{ height: 'calc(100vh - 48px)' }}>
        <Grid
          pageSize={50}
          pagination="infinite"
          rowModelType="server"
          defaultColumnDefinition={{ autoFill: false, minWidth: 100, width: 200 }}
          getRowId={(params) => (params as any).id}
          getRows={getRows}
          renderers={{ dateRenderer: DateRenderer }}
          columnDefinition={columnDefinition.map((c, index) => ({ ...c, hide: index % 2 !== 0 }))}
        />
      </div>
    );
  },
};

export const ServerGridFail: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getRows = useCallback(async (params: GetRowsParams<GridData>) => {
      await sleep(2000);
      params.fail();
    }, []);
    return (
      <div style={{ height: 'calc(100vh - 48px)' }}>
        <Grid
          pageSize={50}
          pagination="infinite"
          rowModelType="server"
          getRowId={(params) => (params as any).id}
          getRows={getRows}
          columnDefinition={columnDefinition}
        />
      </div>
    );
  },
};

export const ServerGridLoading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getRows = useCallback(async (params: GetRowsParams<GridData[]>) => {
      const { startRow, endRow } = params.request;
      await sleep(10000000);
      const response = await fetch(dataPath);
      const data = await response.json();
      params.success({ items: data.slice(startRow, endRow), total: data.length });
    }, []);
    return (
      <div style={{ height: 'calc(100vh - 48px)' }}>
        <Grid
          pageSize={50}
          pagination="infinite"
          rowModelType="server"
          defaultColumnDefinition={{ autoFill: false, minWidth: 100, width: 200 }}
          getRowId={(params) => (params as any).id}
          getRows={getRows}
          columnDefinition={columnDefinition}
        />
      </div>
    );
  },
};

export const ClientGridSuccess: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [progress, setProgress] = useState<{ isLoading: boolean; items: GridData[] }>({
      isLoading: true,
      items: [],
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDidMount(() => {
      setTimeout(() => {
        fetch(dataPath).then((response) => {
          response.json().then((data) => {
            setProgress({ isLoading: false, items: data });
          });
        });
      }, 1000);
    });
    return (
      <div style={{ height: 'calc(100vh - 48px)' }}>
        <Grid
          rowModelType="client"
          items={progress.items}
          isLoading={progress.isLoading}
          pageSize={50}
          defaultColumnDefinition={{ autoFill: false, minWidth: 100, width: 200 }}
          getRowId={(params) => (params as any).id}
          columnDefinition={columnDefinition}
        />
      </div>
    );
  },
};
