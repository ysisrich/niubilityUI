# Switch 开关

<nb-switch :value="value" @change="value = !value"/>

<script>
export default {
    data(){
        return {
            value:true
        }
    }
}
</script>
