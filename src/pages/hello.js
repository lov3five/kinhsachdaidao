import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <h1>Hello World</h1>
      </div>
      <div class="alert alert--primary" role="alert">
  <button aria-label="Close" class="clean-btn close" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  This is a
  <strong>primary</strong>
  alert. You should probably pay attention to it.
</div>
    </Layout>
  );
}