<template>
    <div class="card wrapper">
        <div class="card-body">
            <div class="vgt-response">
                <table class="tableOne vgt-table">
                    <tr>
                        <template v-for="(th, thIndex) in columns">
                            <th
                                :key="thIndex"
                                class="vgt-left-align"
                                :class="th.thClass ? th.thClass : ''"
                                :style="th.thStyle ? th.thStyle : ''"
                            >
                                <span>{{ th.label }}</span>
                            </th>
                        </template>
                    </tr>
                    <template v-for="(tr, trIndex) in rows">
                        <tr :key="trIndex">
                            <template v-for="(td, tdIndex) in columns">
                                <td :key="tdIndex">
                                    <!-- 欄位為圖片 -->
                                    <template v-if="td.type === 'img'">
                                        <span>
                                            <img
                                                class="rounded"
                                                :src="tr[td.field]"
                                                style="width:50px ; height:50px"
                                                alt="corrupted img"
                                            />
                                            <slot v-if="tr.slot && tr.slot[td.field]">
                                                <span v-html="tr.slot[td.field]"></span>
                                            </slot>
                                        </span>
                                    </template>
                                    <!-- 日期格式 -->
                                    <template v-else-if="td.type === 'date'">
                                        <span>
                                            {{ $dayjs(tr[td.field]).format(td.dateOutputFormat || 'YYYY-MM-DD') }}
                                            <slot v-if="tr.slot && tr.slot[td.field]">
                                                <span v-html="tr.slot[td.field]"></span>
                                            </slot>
                                        </span>
                                    </template>
                                    <!-- 欄位為 checkbox -->
                                    <template v-else-if="td.type === 'checkbox'">
                                        <!-- <div>
                                            <input type="checkbox" name="" id="" v-model="tr[td.field]">
                                        </div> -->
                                        <vuenus-checkbox
                                            :id="`checkbox_${trIndex}`"
                                            :value="tr[td.field]"
                                            @input="$emit('input', {
                                                trIndex,
                                                field: td.field,
                                                value: $event
                                            })"
                                        ></vuenus-checkbox>
                                    </template>
                                    <!-- 欄位為 html -->
                                    <template v-else-if="td.type === 'html'">
                                        <span v-html="tr[td.field]"></span>
                                    </template>
                                    <!-- 其他純文字 -->
                                    <template v-else>
                                        <span>
                                            {{ tr[td.field] }}
                                            <slot v-if="tr.slot && tr.slot[td.field]">
                                                <span v-html="tr.slot[td.field]"></span>
                                            </slot>
                                        </span>
                                    </template>
                                </td>
                            </template>
                        </tr>
                    </template>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableList",
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        rows: {
            types: Array,
            default: () => []
        }
    }
};
</script>

<style>
</style>
