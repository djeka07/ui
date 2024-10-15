/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import Grid from './grid';
import { formatDate } from '@djeka07/dates';
import { CellRenderParams, ColumnType } from './grid.type';
import data from './data.json';
import { Typography } from '../../../atoms';

const meta: Meta<typeof Grid> = {
  title: 'Molecules/Grids/Grid',
  component: Grid,
  tags: ['!autodocs'],
};

const DateRenderer = (props: CellRenderParams): JSX.Element => <div>{formatDate(props.value)}</div>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const WithAutofill: Story = {
  args: {
    radius: 'large',
    defaultColumnDefinition: { autoFill: true, minWidth: 100, width: 200 },
    getRowId: (props: any) => {
      return `${props.userName}`;
    },
    columnDefinition: [
      {
        field: 'firstName',
        fieldName: 'Förnamn',
        type: ColumnType.Text,
        filter: false,
      },
      {
        field: 'lastName',
        fieldName: 'Efternamn',
        type: ColumnType.Text,
        filter: false,
      },
      {
        field: 'userName',
        fieldName: 'Användarnamn',
        type: ColumnType.Text,
        filter: false,
      },
      {
        field: 'email',
        fieldName: 'E-post',
        type: ColumnType.Text,
        filter: false,
      },
      {
        field: 'number',
        fieldName: 'Nummer',
        type: ColumnType.Number,
        filter: false,
      },
      {
        field: 'date',
        fieldName: 'Datum',
        cellRenderer: 'dateRenderer',
        type: ColumnType.Date,
        filter: false,
      },
    ],
    renderers: { dateRenderer: DateRenderer },
    items: data,
  },
};

export const WithFloatingFilters: Story = {
  args: {
    radius: 'large',
    defaultColumnDefinition: { autoFill: true, minWidth: 100, width: 200 },
    getRowId: (props: any) => {
      return `${props.userName}`;
    },
    columnDefinition: [
      {
        field: 'firstName',
        fieldName: 'Förnamn',
        type: ColumnType.Text,
        floatingFilter: true,
      },
      {
        field: 'lastName',
        fieldName: 'Efternamn',
        type: ColumnType.Text,
        floatingFilter: true,
      },
      {
        field: 'userName',
        fieldName: 'Användarnamn',
        type: ColumnType.Text,
        floatingFilter: true,
      },
      {
        field: 'email',
        fieldName: 'E-post',
        type: ColumnType.Text,
        floatingFilter: true,
      },
      {
        field: 'number',
        fieldName: 'Nummer',
        type: ColumnType.Number,
        floatingFilter: true,
      },
      {
        field: 'date',
        fieldName: 'Datum',
        cellRenderer: 'dateRenderer',
        type: ColumnType.Date,
        floatingFilter: true,
      },
    ],
    renderers: { dateRenderer: DateRenderer },
    items: data,
  },
};

export const WithResizableColumns: Story = {
  args: {
    radius: 'large',
    defaultColumnDefinition: { autoFill: false, minWidth: 100, width: 200 },
    getRowId: (props: any) => `${props.userName}`,
    columnDefinition: [
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
    ],
    renderers: { dateRenderer: DateRenderer },
    items: data,
  },
};

export const WithHiddenFields: Story = {
  args: {
    radius: 'large',
    defaultColumnDefinition: { autoFill: false, minWidth: 100, width: 200 },
    getRowId: (props: any) => `${props.userName}-${props.email}`,
    columnDefinition: [
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
        field: 'date',
        fieldName: 'Datum',
        cellRenderer: 'dateRenderer',
        type: ColumnType.Date,
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
        hide: true,
      },
    ],
    renderers: { dateRenderer: DateRenderer },
    items: data,
  },
};

export const WithRowClassRules: Story = {
  args: {
    radius: 'large',
    defaultColumnDefinition: { autoFill: true, minWidth: 200, width: 200 },
    getRowId: (props: any) => {
      return `${props.userName}`;
    },
    rowClassRules: {
      hej: 'hej',
      dansa: (props: any) => props.data.firstName === 'Emma',
    },
    columnDefinition: [
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
    ],
    renderers: { dateRenderer: DateRenderer },
    items: data,
  },
  decorators: [
    (Story) => (
      <div>
        <style>{`
          .dansa {
            background-color: var(--light-success-color);
            color: var(--dark-success-color);
          }
        `}</style>
        <div style={{ display: 'grid', gap: 8 }}>
          <Story />
          <div style={{ background: '#fff', borderRadius: 12, padding: 20 }}>
            <Typography variant="h3">Hejsan</Typography>¨
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, lorem eu ultrices feugiat, turpis
              metus eleifend dui, non auctor magna tellus in felis. Aliquam luctus magna eu turpis elementum gravida.
              Quisque id vulputate diam. Vestibulum porta scelerisque neque, non facilisis leo semper id. Nam suscipit
              auctor eros eget faucibus. Praesent ullamcorper nisl a interdum mattis. Nullam sed nisl quis justo
              dignissim ullamcorper vitae non mauris. Curabitur vitae ipsum eget est posuere egestas vel in velit.
              Vivamus ac bibendum nulla. Aliquam bibendum, dolor a vulputate porttitor, lorem augue fermentum leo, vitae
              consectetur magna quam sed mi. Nullam nec finibus nisl, ut tincidunt nibh. Mauris sit amet sapien nulla.
              Quisque vel egestas libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Proin sit amet urna a magna maximus vulputate.
            </Typography>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    isLoading: true,
    defaultColumnDefinition: { autoFill: true, width: 200, minWidth: 100 },
    columnDefinition: [
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
    ],
    renderers: { dateRenderer: DateRenderer },
  },
};
