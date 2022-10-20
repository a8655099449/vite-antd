import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button, Form, FormItem, Input } from 'ant-design-vue';
import './login.less';
import { useUserStore } from '@/store/user';

const login = defineComponent({
  setup() {
    const count = ref(0);
    const acc = ref('');
    const list = ref<
      {
        name: string;
      }[]
    >([]);
    const modelRef = reactive({
      acc: '',
      pwd: '',
    });

    const { validate } = Form.useForm(modelRef);

    const { login: modelLogin } = useUserStore();

    const { replace } = useRouter();

    const login = async () => {
      await validate();
      const res = modelLogin(modelRef);

      if (res) {
        replace(`/home`);
      }
    };
    const handleChange = (key: string, value: any) => {
      modelRef[key] = value;
    };

    return {
      count,
      list,
      acc,
      login,
      handleChange,
      modelRef,
    };
  },
  render() {
    const { login, handleChange, modelRef } = this;
    return (
      <div class={`login`}>
        <div class={`loginForm`}>
          <h1>登录</h1>
          <Form>
            <FormItem>
              <Input
                placeholder={`输入账号 admin`}
                onChange={(e) => handleChange('acc', e.target.value)}
                value={modelRef.acc}
              />
            </FormItem>
            <FormItem>
              <Input.Password
                placeholder={`输入密码 123456`}
                onChange={(e) => handleChange('pwd', e.target.value)}
                value={modelRef.pwd}
              />
            </FormItem>
            <FormItem>
              <Button block type="primary" onClick={login}>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  },
});
export default login;
