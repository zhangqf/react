import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
export default function Navigate() {


  const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
    {
      id: 'home',
      label: 'home',
      // children: [
      //   { id: 'grid-community', label: '@mui/x-data-grid' },
      //   { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      //   { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
      // ],
    },
    {
      id: 'pickers',
      label: 'Date and Time Pickers',
      children: [
        { id: 'pickers-community', label: '@mui/x-date-pickers' },
        { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
      ],
    },
    {
      id: 'charts',
      label: 'Charts',
      children: [{ id: 'charts-community', label: '@mui/x-charts' }],
    },
    {
      id: 'tree-view',
      label: 'Tree View',
      children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
    },
  ];


  return (
    <Box className='ui-navigate' sx={{ minHeight: '100%', minWidth: 250 }}>
       <RichTreeView  items={MUI_X_PRODUCTS} />
    {/* <SimpleTreeView>
      <TreeItem itemId="grid" label="Data Grid">
        <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
        <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
        <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
      </TreeItem>
      <TreeItem itemId="pickers" label="Date and Time Pickers">
        <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
        <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
      </TreeItem>
      <TreeItem itemId="charts" label="Charts">
        <TreeItem itemId="charts-community" label="@mui/x-charts" />
      </TreeItem>
      <TreeItem itemId="tree-view" label="Tree View">
        <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
      </TreeItem>
    </SimpleTreeView> */}
  </Box>
  )
}