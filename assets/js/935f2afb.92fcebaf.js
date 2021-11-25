"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome page","href":"/data-detective/docs/welcome"},{"type":"category","label":"data-detective-airflow","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data Detective Airflow","href":"/data-detective/docs/data-detective-airflow/intro"},{"type":"link","label":"Basic framework concepts","href":"/data-detective/docs/data-detective-airflow/concepts"},{"type":"link","label":"Creating a DAG","href":"/data-detective/docs/data-detective-airflow/factories"},{"type":"link","label":"Creating a new operator","href":"/data-detective/docs/data-detective-airflow/operators"},{"type":"link","label":"Running the dev environment using docker-compose","href":"/data-detective/docs/data-detective-airflow/development"},{"type":"link","label":"DAG testing","href":"/data-detective/docs/data-detective-airflow/testing"},{"type":"link","label":"Production","href":"/data-detective/docs/data-detective-airflow/production"},{"type":"link","label":"Comparison with other frameworks","href":"/data-detective/docs/data-detective-airflow/comparison"},{"type":"link","label":"Abstractions for datasets","href":"/data-detective/docs/data-detective-airflow/datasets"},{"type":"link","label":"How to release data-detective-airflow","href":"/data-detective/docs/data-detective-airflow/release"},{"type":"category","label":"data_detective_airflow_api_reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"dag_generator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"generator","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/generator"},{"type":"category","label":"dags","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"python_dag","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/dags/python_dag"},{"type":"link","label":"tdag","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/dags/tdag"},{"type":"link","label":"yaml_dag","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/dags/yaml_dag"}]},{"type":"category","label":"results","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"base_result","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/results/base_result"},{"type":"link","label":"pg_result","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/results/pg_result"},{"type":"link","label":"pickle_result","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/results/pickle_result"}]},{"type":"category","label":"works","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"base_db_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/base_db_work"},{"type":"link","label":"base_file_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/base_file_work"},{"type":"link","label":"base_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/base_work"},{"type":"link","label":"file_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/file_work"},{"type":"link","label":"pg_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/pg_work"},{"type":"link","label":"s3_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/s3_work"},{"type":"link","label":"sftp_work","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/dag_generator/works/sftp_work"}]}]},{"type":"category","label":"operators","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"tbaseoperator","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/tbaseoperator"},{"type":"category","label":"extractors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"db_dump","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/db_dump"},{"type":"link","label":"python_dump","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump"},{"type":"link","label":"request_dump","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/request_dump"},{"type":"link","label":"s3_dump","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/s3_dump"},{"type":"link","label":"s3_list_bucket","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket"},{"type":"link","label":"tsftpoperator","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/tsftpoperator"}]},{"type":"category","label":"sinks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"pg_loader","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/pg_loader"},{"type":"link","label":"pg_scd1","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/pg_scd1"},{"type":"link","label":"pg_scd1_df_update_insert","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/pg_scd1_df_update_insert"},{"type":"link","label":"pg_single_target_loader","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/pg_single_target_loader"},{"type":"link","label":"s3_delete","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/s3_delete"},{"type":"link","label":"s3_load","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/sinks/s3_load"}]},{"type":"category","label":"transformers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"append","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/transformers/append"},{"type":"link","label":"pg_sql","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/transformers/pg_sql"},{"type":"link","label":"py_transform","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/transformers/py_transform"}]}]},{"type":"category","label":"test_utilities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"assertions","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/test_utilities/assertions"},{"type":"link","label":"generate","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/test_utilities/generate"},{"type":"link","label":"generate_df","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/test_utilities/generate_df"},{"type":"link","label":"test_helper","href":"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/test_utilities/test_helper"}]}]}]}]}}')}}]);