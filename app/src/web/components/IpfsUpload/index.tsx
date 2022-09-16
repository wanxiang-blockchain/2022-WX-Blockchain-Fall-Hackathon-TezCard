import { memo, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Container, InputCon } from './style';
import * as IPFS from 'ipfs-core';
import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';
import { StoreType } from '@type/index';
const IpfsUpload = forwardRef((props, ref) => {
  const { onUploadSuccess } = props;
  const [obj, setObj] = useAtom<StoreType>(store);
  const { ipfsNode } = obj;

  const handleInputClick = e => {
    document.getElementById('photo')?.click();
  };
  useImperativeHandle(ref, () => ({
    handleInputClick,
  }));

  const handleChange = async e => {
    console.log('channge');
    const file = e.target.files[0];
    const reader = new FileReader();
    let node;
    console.log('ipfsNode', ipfsNode);
    if (!ipfsNode) {
      node = await IPFS.create();
      console.log('node', node);
      setObj(draft => {
        draft.ipfsNode = node;
      });
    } else {
      node = ipfsNode;
    }

    reader.onload = async () => {
      console.log('began add');
      const res = await node.add(reader.result);
      console.log('res', res);
      onUploadSuccess(res);
    };
    reader.readAsArrayBuffer(file);
  };
  return (
    <Container className="w-full h-full relative">
      <img src="/public/editIcon.png" className="block w-32 h-32 absolute z-1 bottom-10 right-10" />
      <InputCon
        className="w-32 h-32 absolute z-2 bottom-10 right-10 opacity-0"
        type="file"
        name="photo"
        id="photo"
        onChange={handleChange}
      ></InputCon>
    </Container>
  );
});
export default memo(IpfsUpload);
